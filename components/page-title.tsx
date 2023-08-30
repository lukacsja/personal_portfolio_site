import React from "react";

type Props = {
  title: string;
};

const PageTitle: React.FC<Props> = ({ title }) => {
  return <div className="text-[14px] mb-[30px]">{title}</div>;
};

export default PageTitle;
