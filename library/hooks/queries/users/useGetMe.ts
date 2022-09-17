import { useQuery } from "react-query";

import api from "@Api";
import { userQueryKeys } from "@Utility/queryKey";

export default function useGetMe() {
  return useQuery(userQueryKeys.getMe(), () => api.usersService.getMe(), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retryOnMount: false,
    refetchOnMount: false,
  });
}
