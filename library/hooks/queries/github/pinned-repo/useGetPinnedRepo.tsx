import { useQuery } from "react-query";

import api from "@Api";

import { Users } from "@Api/interface/model";

export default function useGetPinnedRepo(userName: Users["userName"]) {
  return useQuery(
    ["pinnedRepo", userName],
    () => api.repoService.getPinnedRepo(userName),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
    }
  );
}
