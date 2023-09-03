import React, { useEffect, useRef, useState } from 'react';

interface CodeSnippetProps {
  name: string;
  email: string;
  message: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ name, email, message }) => {
  const snippetRef = useRef<HTMLDivElement>(null);
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  const lineHeight = 27;

  const today = new Date().toString().slice(0, 10);

  useEffect(() => {
    const updateLineNumbers = () => {
      const codeContainerHeight = snippetRef?.current?.clientHeight ?? 1;
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
  }, [name, email, message]);

  const blue = 'text-secondary-blue';
  const pink = 'text-accent-pink';
  const yellow = 'text-accent-yellow';

  return (
    <div className='hidden justify-center lg:flex lg:h-full lg:w-full lg:items-start lg:gap-[20px] lg:px-[24px] lg:pt-[156px] lg:text-[18px] lg:leading-[27px] lg:text-secondary-gray'>
      <div className='flex flex-col items-end'>
        {lineNumbers?.map((number) => <div key={number}>{number}</div>)}
      </div>
      <div ref={snippetRef} className='break-keep'>
        <span className={pink}>const</span> <span className={blue}>button</span>{' '}
        <span className={pink}>=</span>{' '}
        <span className={blue}>document.querySelector</span>
        {`(`}
        <span className={yellow}>'#sendBtn'</span>
        {`);`}
        <br />
        <br />
        <span className={pink}>const</span>{' '}
        <span className={blue}>message</span> <span className={pink}>=</span>{' '}
        {'{'} <br />
        <span className={blue}>name</span>:{' '}
        <span className={yellow}>"{name}" </span>,
        <br />
        <span className={blue}>email</span>:{' '}
        <span className={yellow}>"{email}" </span>,
        <br />
        <span className={blue}>message</span>:{' '}
        <span className={yellow}>"{message}" </span>,<br />
        <span>date: </span>
        <span className={yellow}>"{today}"</span>
        <br />
        {'}'}
        <br />
        <br />
        <span className={blue}>button</span>.
        <span className={blue}>addEventListener</span>
        {'('}
        <span className={yellow}>'click'</span>
        {', ()'}
        <span className={pink}>{' => '}</span>
        {'{'}
        <br />
        <span className={blue}>form</span>.<span>send</span>
        {'('}
        <span>message</span>
        {');'}
        <br />
        {'})'}
        <br />
      </div>
    </div>
  );
};

export default CodeSnippet;
