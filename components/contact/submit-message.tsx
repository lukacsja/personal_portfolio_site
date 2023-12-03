import React from 'react';

interface SubmitMessageProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubmitMessage: React.FC<SubmitMessageProps> = ({ setIsSubmitted }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <h2 className='text-[24px] text-text-white'>Thank you! ✌️</h2>
      <p className='mb-3 text-center'>
        Your message has been accepted. You will receive answer really soon!
      </p>
      <button
        className='w-1/2 rounded-lg bg-[#1C2B3A] px-4 py-3 text-[14px] text-text-white transition-all hover:bg-[#263B50] disabled:bg-opacity-50'
        onClick={() => setIsSubmitted(false)}
      >
        send-new-message
      </button>
    </div>
  );
};

export default SubmitMessage;
