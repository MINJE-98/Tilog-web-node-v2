import { HTMLAttributes } from "react";

import tw, { styled } from "twin.macro";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  fontSize: "large" | "medium" | "small";
  color: "black" | "gray";
}

const ParagraphSizeStyle = ({ fontSize }: ParagraphProps) => {
  switch (fontSize) {
    case "large":
      return tw`text-base font-semibold md:text-lg`;
    case "medium":
      return tw`text-sm font-medium md:text-base`;
    case "small":
      return tw`text-xs font-normal md:text-sm`;
    default:
      return "";
  }
};
const ParagraphColorStyle = ({ color }: ParagraphProps) => {
  switch (color) {
    case "black":
      return tw`text-neutral-900 dark:text-neutral-50`;
    case "gray":
      return tw`text-neutral-500`;
    default:
      return "";
  }
};

const Paragraph = styled.p`
  ${ParagraphColorStyle}
  ${ParagraphSizeStyle}
`;
export default Paragraph;
