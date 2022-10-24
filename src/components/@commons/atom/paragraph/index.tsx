import { HTMLAttributes } from "react";

import tw, { styled } from "twin.macro";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  fontSize: "large" | "medium" | "small";
}

const TextInputSizeStyle = ({ fontSize }: ParagraphProps) => {
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

const Paragraph = styled.p`
  ${tw`text-neutral-500`}
  ${TextInputSizeStyle}
`;
export default Paragraph;
