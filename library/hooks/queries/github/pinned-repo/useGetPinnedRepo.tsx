import { useQuery } from "react-query";

import api from "@Api";
import { githubQueryKeys } from "@Utility/queryKey";

import { Users } from "@Api/interface/model";

export default function useGetPinnedRepo(userName: Users["userName"]) {
  return useQuery(
    githubQueryKeys.pinnedRepo(userName),
    () => api.repoService.getPinnedRepo(userName),
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
