import React from 'react';

interface GameEndMessageProps {
  message: string;
}

const GameEndMessage: React.FC<GameEndMessageProps> = ({ message }) => {
  return (
    <div className='absolute left-0 top-[264px] z-[10] flex w-[240px] items-center justify-center bg-[#01080e] py-[12px] text-[24px] uppercase text-gradients-green'>
      {message}
    </div>
  );
};

export default GameEndMessage;
