import React from 'react';

type Props = {
  title: string;
};

const PageTitle: React.FC<Props> = ({ title }) => {
  return <div className='mb-[30px] text-[14px] lg:hidden'>{title}</div>;
};

export default PageTitle;
