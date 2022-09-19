import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Commons/atom/input/UnderLineTextInput";
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
      <h1>{EMAIL_LABEL.TITLE}</h1>
      <p>{EMAIL_LABEL.DESC}</p>
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
