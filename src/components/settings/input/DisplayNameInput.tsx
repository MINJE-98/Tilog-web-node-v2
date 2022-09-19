import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Commons/atom/input/UnderLineTextInput";
import { SETTINGS_INPUT_TYPE, DISPLAY_NAME_RULES } from "@Constants/input";
import { DISPLAY_NAME_LABEL } from "@Constants/text";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

const DisplayNameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div>
      <h1>{DISPLAY_NAME_LABEL.TITLE}</h1>
      <p>{DISPLAY_NAME_LABEL.DESC}</p>
      <UnderLineTextInput
        register={register}
        inputType={SETTINGS_INPUT_TYPE.DISPLAY_NAME}
        rules={DISPLAY_NAME_RULES}
        errorMessage={errors.DISPLAY_NAME?.message}
      />
    </div>
  );
};
export default DisplayNameInput;
