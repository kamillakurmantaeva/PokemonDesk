import React from 'react';

interface HeadingProps {
  size: string;
  className: string | undefined;
}

const Heading: React.FC<HeadingProps> = ({ children, size, className }) => {
  return (
    <p className={className} style={{ fontSize: size }}>
      {children}
    </p>
  );
};

export default Heading;
