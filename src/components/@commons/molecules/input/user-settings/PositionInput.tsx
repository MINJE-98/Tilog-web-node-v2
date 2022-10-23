import { useFormContext } from "react-hook-form";

import Heading from "@Commons/atom/heading";
import UnderLineTextInput from "@Commons/atom/input/UnderLineTextInput";
import Paragraph from "@Commons/atom/paragraph";
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
      <Heading level={1}>{POSITION_LABEL.TITLE}</Heading>
      <Paragraph>{POSITION_LABEL.DESC}</Paragraph>
      <UnderLineTextInput
        register={register}
        inputType={SETTINGS_INPUT_TYPE.POSITION}
        rules={POSITION_RULES}
        errorMessage={errors.POSITION?.message}
      />
    </div>
  );
};
export default PositionInput;
