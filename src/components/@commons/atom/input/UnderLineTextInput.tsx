import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import Paragraph from "@Commons/atom/paragraph";

interface UnderLineTextInputProps<InputType extends FieldValues> {
  register: UseFormRegister<InputType>;
  inputType: Path<InputType>;
  rules: RegisterOptions<InputType>;
  errorMessage?: FieldError["message"];
  className?: string;
}
const UnderLineTextInput = <InputType extends FieldValues>({
  register,
  inputType,
  rules,
  errorMessage,
  className,
}: UnderLineTextInputProps<InputType>) => {
  return (
    <div className="mb-5 min-w-96">
      <input
        className={`${className} ${
          !errorMessage
            ? "dark:focus:border-neutral-50 focus:border-neutral-800"
            : "focus:border-Nestjs dark:focus:border-text-Nestjs"
        } py-2.5 w-full mt-10 bg-transparent border-0 border-b-2 border-neutral-300 appearance-none dark:border-neutral-700 text-neutral-800 dark:text-neutral-50 focus:outline-none focus:ring-0`}
        {...register(inputType, rules)}
      />
      <Paragraph fontSize="small" tw="mt-3 text-text-Nestjs">
        {errorMessage}
      </Paragraph>
    </div>
  );
};
export default UnderLineTextInput;
