import { useQuery } from "react-query";

import api from "@Api";
import { githubQueryKeys } from "@Utility/queryKey";

import { Users } from "@Api/interface/model";

export default function useGetUserStats(userName: Users["userName"]) {
  return useQuery(
    githubQueryKeys.userStats(userName),
    () => api.statsService.getUserStats(userName),
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
