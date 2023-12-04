import { EmailTemplate } from '@/components/contact/email-template';
import React from 'react';
import { Resend } from 'resend';
import { getErrorMessage } from '@/lib/utils';
import { object, string, ValidationError } from 'yup';
import { FormData } from '@/lib/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { FieldErrorMessages } from '@/lib/types';

const resend = new Resend(process.env.RESEND_API_KEY as string);

const schema = object().shape({
  senderName: string().trim().max(100).required(FieldErrorMessages.EmptyName),
  senderEmail: string()
    .trim()
    .email(FieldErrorMessages.InvalidEmail)
    .required(FieldErrorMessages.EmptyEmail),
  formMessage: string()
    .trim()
    .max(5000)
    .required(FieldErrorMessages.EmptyMessage),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const formData: FormData = req.body;

  try {
    await schema.validate(formData, { abortEarly: false });
  } catch (error) {
    if (error instanceof ValidationError) {
      const errors = error.inner.reduce(
        (acc, curr) => {
          if (typeof curr.path === 'string') {
            acc[curr.path] = curr.message;
          }
          return acc;
        },
        {} as Record<string, string>
      );
      return res.status(400).json({ errors });
    }
  }

  const { senderEmail, formMessage, senderName } = formData;

  try {
    const data = await resend.emails.send({
      from: `${senderName.trim()} <onboarding@resend.dev>`,
      to: 'dev.lukacs@gmail.com' as string,
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(EmailTemplate, {
        formMessage: formMessage as string,
        senderName: senderName as string,
        senderEmail: senderEmail as string,
      }),
    });

    res.status(200).json({ data });
  } catch (error: unknown) {
    res.status(500).json({ error: getErrorMessage(error) });

    if (error instanceof Error && error.message) {
      return res.status(422).json({ error: error.message });
    }
  } finally {
    formData.senderName = '';
    formData.senderEmail = '';
    formData.formMessage = '';
  }
}
