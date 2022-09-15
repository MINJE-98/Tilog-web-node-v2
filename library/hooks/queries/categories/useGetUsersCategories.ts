import { useQuery } from "react-query";

import api from "@Api";

import { Category } from "@Api/interface/model";

const useGetUsersCategories = (userId: Category["id"]) => {
  return useQuery(
    ["usersCategories", userId],
    () => api.categoryService.getUsersCategories(userId),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
    }
  );
};

export default useGetUsersCategories;
