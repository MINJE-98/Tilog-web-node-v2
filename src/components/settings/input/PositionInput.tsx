import { useFormContext } from "react-hook-form";

import UnderLineTextInput from "@Commons/atom/input/UnderLineTextInput";
import { positionRules } from "@Components/settings/input/rules";
import { POSITION, POSITION_DESC, POSITION_TITLE } from "@Constants/settings";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

const PositionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSettingTypes>();
  return (
    <div>
      <h1>{POSITION_TITLE.ko}</h1>
      <p>{POSITION_DESC.ko}</p>
      <UnderLineTextInput
        register={register}
        type={POSITION}
        rules={positionRules("ko")}
        error={errors.POSITION?.message}
      />
    </div>
  );
};
export default PositionInput;
