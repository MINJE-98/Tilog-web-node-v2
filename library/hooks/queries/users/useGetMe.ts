import { useQuery } from "react-query";

import api from "@Api";

export default function useGetMe() {
  return useQuery(["me"], () => api.usersService.getMe(), {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retryOnMount: false,
    refetchOnMount: false,
  });
}
