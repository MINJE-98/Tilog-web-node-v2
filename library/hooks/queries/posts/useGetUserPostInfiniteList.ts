import { useInfiniteQuery } from "react-query";

import api from "@Api";

import GetCategoryPostRequest from "@Api/post/interface/getPostRequestCategoryName";

const useGetUserPostInfiniteList = (
  getCategoryPostRequest: GetCategoryPostRequest
) => {
  const { dateScope, sortScope, page, maxContent, categoryName, userId } =
    getCategoryPostRequest;

  return useInfiniteQuery(
    ["userPostList", "infinite", userId, categoryName],
    ({ pageParam = page }) => {
      return api.postService.getCategoryPosts({
        dateScope,
        sortScope,
        page: pageParam,
        maxContent,
        userId,
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
        const lastPagesListCount = lastPages.data.list.length;

        if (lastPagesListCount !== 0 && lastPagesListCount % maxContent === 0) {
          return nextPage;
        }
        return null;
      },
    }
  );
};

export default useGetUserPostInfiniteList;
