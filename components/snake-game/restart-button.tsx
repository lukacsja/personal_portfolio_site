import React from 'react';

interface RestartButtonProps {
  restartGame: () => void;
  buttonLabel: string;
}

const RestartButton: React.FC<RestartButtonProps> = ({
  restartGame,
  buttonLabel,
}) => {
  return (
    <button
      onClick={() => restartGame()}
      className='absolute left-0 top-[325px] z-[10] flex w-full items-center justify-center py-[12px] text-text-white transition-all duration-300  hover:bg-primary-medium hover:text-secondary-gray'
    >
      {buttonLabel}
    </button>
  );
};

export default RestartButton;
