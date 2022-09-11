import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import useSetUserSetting from "@Mutations/users-settings/useSetUserSettingMutation";

import { SetSettingRequestBodyDtoSettingTypeEnum } from "@til-log.lab/tilog-api";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

// TODO Toast
const useHandleSubmit = (): SubmitHandler<UserSettingTypes> => {
  const { mutate } = useSetUserSetting();

  return (object: UserSettingTypes) => {
    // const loading = toast.loading("로딩중...");
    Object.keys(object).forEach((key) => {
      const userSettingKey = key as SetSettingRequestBodyDtoSettingTypeEnum;
      mutate(
        {
          content: object[userSettingKey],
          settingType: userSettingKey,
        },
        {
          onError: (error) => {
            if (error instanceof Error) toast.error(error.message);
          },
          // onSuccess: () => {
          //   toast.success(SAVE_MESSAGE.ko, {
          //     id: loading,
          //   });
          // },
        }
      );
    });
  };
};

export default useHandleSubmit;
