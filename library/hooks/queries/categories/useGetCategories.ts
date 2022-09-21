import { useQuery } from "react-query";

import api from "@Api";
import { categoryQueryKeys } from "@Utility/queryKey";

import { Category } from "@Api/interface/model";

interface UserGetCategoriesProps {
  categoryName?: Category["categoryName"];
  suspense?: boolean;
  useErrorBoundary?: boolean;
}
const useGetCategories = ({
  categoryName,
  suspense = false,
  useErrorBoundary = false,
}: UserGetCategoriesProps) => {
  return useQuery(
    categoryQueryKeys.categoryName(categoryName),
    () => api.categoryService.getCategories(categoryName),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      suspense,
      useErrorBoundary,
    }
  );
};

export default useGetCategories;
