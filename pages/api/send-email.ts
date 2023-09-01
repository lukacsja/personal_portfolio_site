import { EmailTemplate } from '@/components/email-template';
import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import { FormData } from '@/lib/types';
import { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const formData: FormData = req.body;

    const senderEmail = formData.senderEmail;
    const formMessage = formData.formMessage;
    const senderName = formData.senderName;

    if (!validateString(senderEmail, 500)) {
      return res.status(400).json({ error: 'Invalid sender email' });
    }

    if (!validateString(formMessage, 5000)) {
      return res.status(400).json({ error: 'Invalid message' });
    }

    try {
      const data = await resend.emails.send({
        from: 'Portfolio Form <onboarding@resend.dev>',
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
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
