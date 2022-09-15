import { useMutation, useQueryClient } from "react-query";

import api from "@Api";

import { SetSettingRequestBodyDto } from "@til-log.lab/tilog-api";

import GetMeResponse from "@Api/users/interface/getMeResponse";

const useSetUserSetting = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (setSettingRequestBodyDto: SetSettingRequestBodyDto) =>
      api.usersService.setSetting(setSettingRequestBodyDto),

    {
      onSuccess: (_data, variables) => {
        queryClient.setQueriesData<GetMeResponse | undefined>(
          ["myUserInfo"],
          (oldData) => {
            if (!oldData) return oldData;
            const newData: GetMeResponse = oldData;
            newData.settings[variables.settingType] = variables.content;
            return newData;
          }
        );
      },
    }
  );
};

export default useSetUserSetting;
