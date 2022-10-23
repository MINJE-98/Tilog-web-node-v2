import { useFormContext } from "react-hook-form";

import Heading from "@Commons/atom/heading";
import UnderLineTextInput from "@Commons/atom/input/UnderLineTextInput";
import Paragraph from "@Commons/atom/paragraph";
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
      <Heading level={1}>{INTRO_MSG_LABEL.TITLE}</Heading>
      <Paragraph>{INTRO_MSG_LABEL.DESC}</Paragraph>
      <UnderLineTextInput
        register={register}
        inputType={SETTINGS_INPUT_TYPE.INTRO_MSG}
        rules={INTRO_MSG_RULES}
        errorMessage={errors.INTRO_MSG?.message}
      />
    </div>
  );
};
export default IntroductionInput;
