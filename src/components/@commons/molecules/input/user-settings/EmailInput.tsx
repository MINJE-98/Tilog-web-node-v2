import { useFormContext } from "react-hook-form";

import Heading from "@Commons/atom/heading";
import UnderLineTextInput from "@Commons/atom/input/UnderLineTextInput";
import Paragraph from "@Commons/atom/paragraph";
import { SETTINGS_INPUT_TYPE, EMAIL_RULES } from "@Constants/input";
import { EMAIL_LABEL } from "@Constants/text";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div>
      <Heading level={1}>{EMAIL_LABEL.TITLE}</Heading>
      <Paragraph>{EMAIL_LABEL.DESC}</Paragraph>
      <UnderLineTextInput
        register={register}
        inputType={SETTINGS_INPUT_TYPE.EMAIL}
        rules={EMAIL_RULES}
        errorMessage={errors.EMAIL?.message}
      />
    </div>
  );
};
export default EmailInput;
