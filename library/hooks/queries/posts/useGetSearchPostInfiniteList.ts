import { useInfiniteQuery } from "react-query";

import api from "@Api";
import { postQueryKeys } from "@Utility/queryKey";

import GetCategoryPostRequest from "@Api/post/interface/getPostRequestCategoryName";

const useGetSearchPostInfiniteList = (
  getCategoryPostRequest: GetCategoryPostRequest
) => {
  const { dateScope, sortScope, page, maxContent, categoryName } =
    getCategoryPostRequest;

  return useInfiniteQuery(
    postQueryKeys.postListInfiniteSearchCategoryName(categoryName),
    ({ pageParam = page }) => {
      return api.postService.getCategoryPosts({
        dateScope,
        sortScope,
        page: pageParam,
        maxContent,
        categoryName,
      });
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: 1000 * 60,
      suspense: true,
      useErrorBoundary: true,
      getNextPageParam: (lastPages, pages) => {
        const nextPage = pages.length;
        const lastPagesListCount = lastPages.list.length;

        if (lastPagesListCount !== 0 && lastPagesListCount % maxContent === 0) {
          return nextPage;
        }
        return null;
      },
    }
  );
};

export default useGetSearchPostInfiniteList;
