import { useQuery } from "react-query";

import api from "@Api";

import { ExceptionInterface } from "@Api/exception/interface";
import GetUserProfileResponseTransFormSettingsDto from "@Api/users/interface/getUserProfileResponseTransFormSettingsDto";

export default function useGetUserProfileQuery(userId: number) {
  return useQuery<
    GetUserProfileResponseTransFormSettingsDto,
    ExceptionInterface,
    GetUserProfileResponseTransFormSettingsDto
  >(["userInfo", userId], () => api.usersService.getUserProfile(userId), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retryOnMount: false,
    refetchOnMount: false,
  });
}
