import React, { useEffect, useState } from 'react';

interface LineNumbersProps {
  codeContainerRef: React.RefObject<HTMLDivElement>;
  lineHeight: number;
  content: string | null;
}

const LineNumbers: React.FC<LineNumbersProps> = ({
  codeContainerRef,
  lineHeight,
  content,
}) => {
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  useEffect(() => {
    const updateLineNumbers = () => {
      const codeContainerHeight = codeContainerRef?.current?.clientHeight ?? 1;
      const requiredLines = codeContainerHeight / lineHeight + 1;

      setLineNumbers(
        Array.from({ length: requiredLines }, (_, index) => index + 1)
      );
    };

    updateLineNumbers();

    window.addEventListener('resize', updateLineNumbers);

    return () => {
      window.removeEventListener('resize', updateLineNumbers);
    };
  }, [codeContainerRef, lineHeight, content]);

  return (
    <div className='flex select-none flex-col items-end'>
      {lineNumbers?.map((number) => <div key={number}>{number}</div>)}
    </div>
  );
};

export default LineNumbers;
