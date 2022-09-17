import { useQuery } from "react-query";

import api from "@Api";
import { categoryQueryKeys } from "@Utility/queryKey";

const useGetAllCategories = () => {
  return useQuery(
    categoryQueryKeys.all,
    () => api.categoryService.getCategories(),
    {
      // NOTE: 전체 카테고리의 데이터는 유동적이지 않기 때문에 한번 Fetching한 후 데이터를 서버와 동기화 하지 않습니다.
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: Infinity,
      suspense: true,
      useErrorBoundary: true,
    }
  );
};

export default useGetAllCategories;
