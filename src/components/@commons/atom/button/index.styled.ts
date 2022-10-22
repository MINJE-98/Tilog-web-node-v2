import tw, { styled } from "twin.macro";

import ButtonProps from "@Commons/atom/button/index.interface";

const buttonSizeStyle = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return tw`px-6 py-2.5 text-sm lg:px-7 lg:py-2.5 lg:text-base`;
    case "medium":
      return tw`px-8 py-3 text-base lg:px-11 lg:py-3 lg:text-xl`;
    case "large":
      return tw`px-12 py-3 text-xl lg:px-14 lg:py-3 lg:text-2xl`;
    default:
      return "";
  }
};

const buttonColorStyle = (color: ButtonProps["color"]) => {
  switch (color) {
    case "primary":
      return tw`text-neutral-50 bg-neutral-800 dark:bg-black hover:bg-neutral-700`;
    case "secondary":
      return tw`border-[1px] border-neutral-300  text-neutral-800 dark:text-neutral-50`;
    default:
      return "";
  }
};

const StyledButton = styled.button<ButtonProps>`
  ${tw`rounded-md`}
  ${({ size }) => {
    return size && buttonSizeStyle(size);
  }}
  ${({ color }) => {
    return color && buttonColorStyle(color);
  }}
`;

export default StyledButton;
