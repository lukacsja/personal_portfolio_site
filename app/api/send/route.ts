"use server";

import { EmailTemplate } from '@/components/email-template';
import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from "@/lib/utils";
import { FormData } from '@/lib/types';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.senderEmail;
  const formMessage = formData.formMessage;
  const senderName = formData.senderName;

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(formMessage, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: 'dev.lukacs@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(EmailTemplate, {
        formMessage: formMessage as string,
        senderName: senderName as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  }
};