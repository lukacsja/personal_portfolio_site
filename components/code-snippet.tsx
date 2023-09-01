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

  const today = new Date().toString().slice(0, 10).split(' ').join(' ');

  console.log(new Date());

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

  return (
    <div className='hidden lg:mx-0 lg:flex lg:w-[50%] lg:items-start lg:justify-center  lg:gap-[20px] lg:text-[18px] lg:leading-[27px] lg:text-secondary-gray'>
      <div className='w-auto'>
        {lineNumbers?.map((number) => <div>{number}</div>)}
      </div>
      <div ref={snippetRef} className=''>
        <span className='text-accent-pink'>const</span>{' '}
        <span className='text-secondary-blue'>button</span>{' '}
        <span className='text-accent-pink'>=</span>{' '}
        <span className='text-secondary-blue'>document.querySelector</span>(
        <span className='text-accent-yellow'>'#sendBtn'</span>
        );
        <br />
        <br />
        <span className='text-accent-pink'>const</span>{' '}
        <span className='text-secondary-blue'>message</span>{' '}
        <span className='text-accent-pink'>=</span> {'{'} <br />
        <span className='text-secondary-blue'>name</span>:{' '}
        <span className='text-accent-yellow'>"{name}" </span>,
        <br />
        <span className='text-secondary-blue'>email</span>:{' '}
        <span className='text-accent-yellow'>"{email}" </span>,
        <br />
        <span className='text-secondary-blue'>message</span>:{' '}
        <span className='text-accent-yellow'>"{message}" </span>,<br />
        <span>date: </span>
        <span className='text-accent-yellow'>"{today}"</span>
        <br />
        {'}'}
        <br />
        <br />
        <span className='text-secondary-blue'>button</span>.
        <span className='text-secondary-blue'>addEventListener</span>
        {'('}
        <span className='text-accent-yellow'>'click'</span>
        {', ()'}
        <span>{' => '}</span>
        {'{'}
        <br />
        <span className='text-secondary-blue'>form</span>.<span>send</span>
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
