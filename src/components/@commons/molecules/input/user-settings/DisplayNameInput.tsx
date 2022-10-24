import { useFormContext } from "react-hook-form";

import Heading from "@Commons/atom/heading";
import TextInput from "@Commons/atom/input";
import Paragraph from "@Commons/atom/paragraph";
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
      <Heading level={1}>{DISPLAY_NAME_LABEL.TITLE}</Heading>
      <Paragraph fontSize="medium">{DISPLAY_NAME_LABEL.DESC}</Paragraph>
      <TextInput
        type="underline"
        {...register(SETTINGS_INPUT_TYPE.DISPLAY_NAME, DISPLAY_NAME_RULES)}
        errorMessage={errors.DISPLAY_NAME?.message}
      />
    </div>
  );
};
export default DisplayNameInput;
