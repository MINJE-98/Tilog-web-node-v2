import { useInfiniteQuery } from "react-query";

import api from "@Api";
import { postQueryKeys } from "@Utility/queryKey";

import { GetPostRequest } from "@Api/post/interface/getPostRequest";

const useGetMostPopularPostInfiniteList = (getPostRequest: GetPostRequest) => {
  const { dateScope, sortScope, maxContent, page } = getPostRequest;
  return useInfiniteQuery(
    postQueryKeys.postListInfinitePopularDateScope(dateScope),
    ({ pageParam = page }) => {
      return api.postService.getPosts({
        dateScope,
        sortScope,
        page: pageParam,
        maxContent,
      });
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: 1000 * 60,
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

export default useGetMostPopularPostInfiniteList;
