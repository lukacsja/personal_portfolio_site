import { EmailTemplate } from '@/components/email-template';
import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import { FormData } from '@/lib/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { emailRegex } from '@/lib/utils';
import { FieldErrors } from '@/lib/types';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const formData: FormData = req.body;

    const senderEmail = formData.senderEmail.trim();
    const formMessage = formData.formMessage;
    const senderName = formData.senderName.trim();

    const errors: Record<string, string> = {};

    if (!validateString(senderName, 100)) {
      errors.senderName = FieldErrors.nameInvalid;
    }

    if (!validateString(senderEmail, 200)) {
      errors.senderEmail = FieldErrors.emailInvalid;
    }

    if (!validateString(formMessage, 5000)) {
      errors.formMessage = FieldErrors.messageInvalid;
    }

    if (!emailRegex.test(senderEmail)) {
      errors.senderEmail = FieldErrors.emailInvalid;
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    try {
      const data = await resend.emails.send({
        from: `${senderName} <onboarding@resend.dev>`,
        to: 'dev.lukacs@gmail.com',
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
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
