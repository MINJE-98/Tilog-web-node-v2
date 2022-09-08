import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Commons/atom/input/UnderLineTextInput";
import { SETTINGS_INPUT_TYPE, POSITION_RULES } from "@Constants/input";
import { POSITION_LABEL } from "@Constants/text";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

const PositionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div>
      <h1>{POSITION_LABEL.TITLE}</h1>
      <p>{POSITION_LABEL.DESC}</p>
      <UnderLineTextInput
        register={register}
        inputType={SETTINGS_INPUT_TYPE.POSITION}
        rules={POSITION_RULES}
        error={errors.POSITION?.message}
      />
    </div>
  );
};
export default PositionInput;
