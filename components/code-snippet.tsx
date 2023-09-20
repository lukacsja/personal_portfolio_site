import React, { useEffect, useRef, useState } from 'react';
import LineNumbers from './line-numbers';

interface CodeSnippetProps {
  name: string;
  email: string;
  message: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ name, email, message }) => {
  const snippetRef = useRef<HTMLDivElement>(null);

  const today = new Date().toString().slice(0, 10);

  const blue = 'text-secondary-blue';
  const pink = 'text-accent-pink';
  const yellow = 'text-accent-yellow';

  return (
    <div className='hidden lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:px-[24px] lg:text-[18px] lg:leading-[27px] lg:text-secondary-gray'>
      <div className='lg:flex lg:items-start lg:gap-[20px]'>
        <LineNumbers codeContainerRef={snippetRef} lineHeight={27} />
        <div ref={snippetRef} className='break-keep'>
          <span className={pink}>const</span>{' '}
          <span className={blue}>button</span> <span className={pink}>=</span>{' '}
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
    </div>
  );
};

export default CodeSnippet;
