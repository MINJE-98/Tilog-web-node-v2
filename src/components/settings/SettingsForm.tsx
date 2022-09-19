import { FormProvider, useForm } from "react-hook-form";

import SettingsSubmit from "@Commons/molecules/buttons/SettingsSubmit";
import DisplayNameInput from "@Commons/molecules/input/user-settings/DisplayNameInput";
import EmailInput from "@Commons/molecules/input/user-settings/EmailInput";
import IntroductionInput from "@Commons/molecules/input/user-settings/IntroductionInput";
import PositionInput from "@Commons/molecules/input/user-settings/PositionInput";
import useHandleSubmit from "@Components/settings/hooks/useHandleSettingsSubmit";
import { useAuth } from "@Contexts/auth/AuthContext";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

const SettingsForm = () => {
  const onSubmit = useHandleSubmit();
  const { userInfo } = useAuth();
  const method = useForm<UserSettingTypes>({
    defaultValues: userInfo ? userInfo.settings : {},
  });
  return (
    <div className="w-full m-auto p-14 bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)}>
          <DisplayNameInput />
          <EmailInput />
          <IntroductionInput />
          <PositionInput />
          <div className="text-right">
            <SettingsSubmit />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SettingsForm;
