import React from 'react';

interface ScoreBoardProps {
  foodLeft: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ foodLeft }) => {
  return (
    <div className='flex flex-col gap-[10px]'>
      <span>// food left</span>
      <div className='flex w-[120px] flex-wrap gap-[14px]'>
        {Array.from({ length: foodLeft }, (value, index) => (
          <div
            key={index}
            className={`foodShadow h-[10px] w-[10px] rounded-full bg-gradients-green transition-all duration-500`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;
