import React, { HTMLAttributes } from "react";

import tw, { styled } from "twin.macro";

interface HeadingLevel {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
const fontSize = ({ level }: HeadingLevel) => {
  switch (level) {
    case 1:
      return tw`text-2xl font-extrabold md:text-4xl`;
    case 2:
      return tw`text-xl font-bold md:text-3xl`;
    case 3:
      return tw`text-lg font-medium md:text-2xl`;
    case 4:
      return tw`text-base font-normal md:text-xl`;
    case 5:
      return tw`text-sm font-medium md:text-lg`;
    case 6:
      return tw`text-sm font-medium md:text-base`;
    default:
      return "";
  }
};

const Heading = styled(({ level, children, ...props }: HeadingProps) =>
  React.createElement(`h${level}`, props, children)
)`
  ${tw`text-neutral-800 dark:text-neutral-50`}
  ${fontSize}
`;

export default Heading;
