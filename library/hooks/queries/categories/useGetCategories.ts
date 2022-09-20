import { useQuery } from "react-query";

import api from "@Api";
import { categoryQueryKeys } from "@Utility/queryKey";

import { Category } from "@Api/interface/model";

const useGetCategories = (categoryName?: Category["categoryName"]) => {
  return useQuery(
    categoryQueryKeys.categoryName(categoryName),
    () => api.categoryService.getCategories(categoryName),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      suspense: true,
      useErrorBoundary: true,
    }
  );
};

export default useGetCategories;
