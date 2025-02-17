import { useQuery } from "react-query";

import api from "@Api";
import { userQueryKeys } from "@Utility/queryKey";

import { Users } from "@Api/interface/model";

export default function useGetUserProfile(userName: Users["userName"]) {
  return useQuery(
    userQueryKeys.userDetailUserName(userName),
    () => api.usersService.getUserProfile(userName),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      suspense: true,
      useErrorBoundary: true,
    }
  );
}
