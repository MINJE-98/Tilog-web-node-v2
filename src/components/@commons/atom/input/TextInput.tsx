import { InputHTMLAttributes } from "react";

import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import Paragraph from "@Commons/atom/paragraph";

import TailwindSize from "@Models/interface/fontSize";

interface TextInputProps<InputType extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  fontSize: TailwindSize;
  inputType: Path<InputType>;
  register: UseFormRegister<InputType>;
  errorMessage: FieldError["message"];
  rules?: RegisterOptions<InputType>;
}
const TextInput = <InputType extends FieldValues>({
  register,
  inputType,
  rules,
  fontSize = "base",
  errorMessage,
  ...props
}: TextInputProps<InputType>) => {
  return (
    <>
      <input
        className={`p-5 w-full bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white text-${fontSize}`}
        {...register(inputType, rules)}
        {...props}
      />
      {errorMessage && (
        <Paragraph fontSize="small" tw="mt-3 text-Nestjs">
          {errorMessage}
        </Paragraph>
      )}
    </>
  );
};
export default TextInput;
