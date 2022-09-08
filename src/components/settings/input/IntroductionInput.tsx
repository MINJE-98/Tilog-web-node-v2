import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Commons/atom/input/UnderLineTextInput";
import { SETTINGS_INPUT_TYPE, INTRO_MSG_RULES } from "@Constants/input";
import { INTRO_MSG_LABEL } from "@Constants/text";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

const IntroductionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div>
      <h1>{INTRO_MSG_LABEL.TITLE}</h1>
      <p>{INTRO_MSG_LABEL.DESC}</p>
      <UnderLineTextInput
        register={register}
        inputType={SETTINGS_INPUT_TYPE.INTRO_MSG}
        rules={INTRO_MSG_RULES}
        error={errors.INTRO_MSG?.message}
      />
    </div>
  );
};
export default IntroductionInput;
