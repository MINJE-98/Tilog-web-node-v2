import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Commons/atom/input/UnderLineTextInput";
import { introMsgRules } from "@Components/settings/input/rules";
import {
  INTRO_MSG,
  INTRO_MSG_DESC,
  INTRO_MSG_TITLE,
} from "@Constants/settings";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

const IntroductionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div>
      <h1>{INTRO_MSG_TITLE.ko}</h1>
      <p>{INTRO_MSG_DESC.ko}</p>
      <UnderLineTextInput
        register={register}
        type={INTRO_MSG}
        rules={introMsgRules("ko")}
        error={errors.INTRO_MSG?.message}
      />
    </div>
  );
};
export default IntroductionInput;
