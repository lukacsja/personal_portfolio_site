import React from 'react';

interface EmailTemplateProps {
  formMessage: string;
  senderEmail: string;
  senderName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  formMessage,
  senderEmail,
  senderName,
}) => (
  <main>
    <h1>You got a new message from {senderName} </h1>
    <p>{formMessage}</p>
    <h4>{`sent by: ${senderEmail}`}</h4>
  </main>
);
