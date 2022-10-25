import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import Heading from "@Commons/atom/heading";
import TextInput from "@Commons/atom/input";
import Paragraph from "@Commons/atom/paragraph";

interface UserSettingInputProps<InputType extends FieldValues> {
  title: string;
  desc: string;
  register: UseFormRegister<InputType>;
  errors: DeepMap<InputType, FieldError>;
  inputType: Path<InputType>;
  rules: RegisterOptions<InputType>;
}

const UserSettingInput = <InputType extends FieldValues>({
  title,
  desc,
  register,
  inputType,
  errors,
  rules,
}: UserSettingInputProps<InputType>) => {
  return (
    <label>
      <Heading level={1}>{title}</Heading>
      <Paragraph color="gray" fontSize="small">
        {desc}
      </Paragraph>
      <div tw="my-5">
        <TextInput
          fontSize="medium"
          type="underline"
          formObject={{
            inputType,
            register,
            rules,
            errors,
          }}
        />
      </div>
    </label>
  );
};
export default UserSettingInput;
