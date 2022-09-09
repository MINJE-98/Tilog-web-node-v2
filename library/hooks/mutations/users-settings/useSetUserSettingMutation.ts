import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

import api from "@Api";

import { SetSettingRequestBodyDtoSettingTypeEnum } from "@til-log.lab/tilog-api";

import GetMeResponseTransFormSettingsDto from "@Api/users/interface/getMeResponseTransFormSettingsDto";

const useSetUserSetting = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({
      content,
      settingType,
    }: {
      content: string | null;
      settingType: SetSettingRequestBodyDtoSettingTypeEnum;
    }) => api.usersService.setSetting(content, settingType),
    {
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          toast.error(error.message);
        }
      },
      onSuccess: (_data, variables) => {
        queryClient.setQueriesData<
          GetMeResponseTransFormSettingsDto | undefined
        >(["myUserInfo"], (oldData) => {
          if (!oldData) return oldData;
          const newData: GetMeResponseTransFormSettingsDto = oldData;
          newData.settings[variables.settingType] = variables.content;
          return newData;
        });
      },
    }
  );
};

export default useSetUserSetting;
