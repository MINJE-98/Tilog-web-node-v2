import { useFormContext } from "react-hook-form";

import SettingsSubmit from "@Commons/molecules/buttons/SettingsSubmit";
import UserSettingInput from "@Commons/molecules/input/user-settings";
import {
  DISPLAY_NAME_RULES,
  EMAIL_RULES,
  INTRO_MSG_RULES,
  POSITION_RULES,
  SETTINGS_INPUT_TYPE,
} from "@Constants/input";
import {
  DISPLAY_NAME_LABEL,
  EMAIL_LABEL,
  INTRO_MSG_LABEL,
  POSITION_LABEL,
} from "@Constants/text";

const SettingsForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div tw="max-w-[550px] m-auto p-14 bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <UserSettingInput
        title={DISPLAY_NAME_LABEL.TITLE}
        desc={DISPLAY_NAME_LABEL.DESC}
        register={register}
        errors={errors}
        inputType={SETTINGS_INPUT_TYPE.DISPLAY_NAME}
        rules={DISPLAY_NAME_RULES}
      />
      <UserSettingInput
        title={EMAIL_LABEL.TITLE}
        desc={EMAIL_LABEL.DESC}
        register={register}
        errors={errors}
        inputType={SETTINGS_INPUT_TYPE.EMAIL}
        rules={EMAIL_RULES}
      />
      <UserSettingInput
        title={INTRO_MSG_LABEL.TITLE}
        desc={INTRO_MSG_LABEL.DESC}
        register={register}
        errors={errors}
        inputType={SETTINGS_INPUT_TYPE.INTRO_MSG}
        rules={INTRO_MSG_RULES}
      />

      <UserSettingInput
        title={POSITION_LABEL.TITLE}
        desc={POSITION_LABEL.DESC}
        register={register}
        errors={errors}
        inputType={SETTINGS_INPUT_TYPE.POSITION}
        rules={POSITION_RULES}
      />
      <div className="text-right">
        <SettingsSubmit />
      </div>
    </div>
  );
};

export default SettingsForm;
