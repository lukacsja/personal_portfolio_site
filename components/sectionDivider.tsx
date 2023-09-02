import React from 'react';

type SectionDividerProps = {
  direction: 'horizontal' | 'vertical';
};

const SectionDivider: React.FC<SectionDividerProps> = ({ direction }) => {
  return (
    <>
      {direction === 'horizontal' && (
        <div className='h-[1px] w-full bg-lines' />
      )}
      {direction === 'vertical' && <div className='h-full w-[1px] bg-lines' />}
    </>
  );
};

export default SectionDivider;
