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
      className='absolute left-0 top-[332px] z-[10] flex h-[18px] w-[240px] items-center justify-center text-text-white'
    >
      {buttonLabel}
    </button>
  );
};

export default RestartButton;
