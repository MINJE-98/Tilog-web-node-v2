import { InputHTMLAttributes } from "react";

import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import tw, { css, styled } from "twin.macro";

import Paragraph from "@Commons/atom/paragraph";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "default" | "underline";
  fontSize: "large" | "medium" | "small";
  isError: boolean;
}

const InputTypeStyle = (
  type: InputProps["type"],
  isError: InputProps["isError"]
) => {
  switch (type) {
    case "default":
      return tw`w-full p-5 bg-white dark:bg-neutral-800 focus:dark:bg-neutral-700 focus:bg-neutral-100 text-neutral-800 dark:text-neutral-50 `;
    case "underline":
      return css([
        tw`bg-transparent border-0 border-b-2`,
        isError
          ? tw` border-Nestjs`
          : tw` dark:focus:border-neutral-50 focus:border-neutral-800`,
      ]);
    default:
      return "";
  }
};
const InputSizeStyle = (fontSize: InputProps["fontSize"]) => {
  switch (fontSize) {
    case "large":
      return tw`text-2xl font-semibold md:text-3xl`;
    case "medium":
      return tw`text-lg font-medium md:text-xl`;
    case "small":
      return tw`text-sm font-normal md:text-base`;
    default:
      return "";
  }
};

const Input = styled.input<InputProps>`
  ${tw`w-full rounded-none appearance-none focus:outline-none`}
  ${({ type, isError }) => {
    return InputTypeStyle(type, isError);
  }}

  ${({ fontSize }) => {
    return InputSizeStyle(fontSize);
  }}
`;

interface TestInputProps<InputType extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  type: "default" | "underline";
  fontSize: "large" | "medium" | "small";
  formObject?: {
    inputType: Path<InputType>;
    register: UseFormRegister<InputType>;
    errors: DeepMap<InputType, FieldError>;
    rules: RegisterOptions<InputType>;
  };
}

const TextInput = <InputType extends FieldValues>({
  type,
  fontSize,
  formObject,
  children,
  ...props
}: TestInputProps<InputType>) => {
  // react hook form의 input인지 확인한다.
  const { inputType, register, errors, rules } = formObject || {};

  const hasRegister = register && inputType;
  const inputRegister = hasRegister && register(inputType, rules);

  const errorMessage = inputRegister && errors && errors[inputType]?.message;
  const isError = !!errorMessage;
  return (
    <div tw="">
      <Input
        isError={isError}
        type={type}
        fontSize={fontSize}
        {...inputRegister}
        {...props}
      >
        {children}
      </Input>
      {errorMessage && (
        <Paragraph color="gray" fontSize="small" tw="text-Nestjs">
          {errorMessage}
        </Paragraph>
      )}
    </div>
  );
};
export default TextInput;
