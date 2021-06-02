import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface HeadingProps {
  size?: string;
  className?: string;
}

interface IHeadingLevel {
  [n: string]: number;
}

const HEADING_LEVEL: IHeadingLevel = {
  xl: 1,
  l: 2,
  m: 3,
  s: 4,
  xs: 5,
};

const Heading: React.FC<HeadingProps> = ({ children, size = 'xl', className }) => {
  const headingProps = {
    className: cn(s.heading, s[size], className),
  };

  return React.createElement(`h${HEADING_LEVEL[size]}`, headingProps, children);
};

export default Heading;
