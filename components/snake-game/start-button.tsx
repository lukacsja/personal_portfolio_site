import React from 'react';

interface StartButtonProps {
  startGame: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ startGame }) => {
  return (
    <button
      onClick={() => startGame()}
      className='absolute left-[50%] top-[300px] z-[10] flex -translate-x-1/2 transform items-center justify-center whitespace-nowrap rounded-lg bg-accent-yellow px-[14px] py-[10px] text-[#01080E] transition-all duration-300 hover:scale-110 hover:bg-[#ffac6b]'
    >
      start-game
    </button>
  );
};

export default StartButton;
