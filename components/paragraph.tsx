import React from 'react';

interface ParagraphProps {
  content: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ content }) => {
  const renderContentWithLineBreaks = (content: string) => {
    return content.split('\n').map((item, index) => (
      <p key={index}>
        {item}
        <br />
      </p>
    ));
  };

  return <>{renderContentWithLineBreaks(content)}</>;
};

export default Paragraph;
