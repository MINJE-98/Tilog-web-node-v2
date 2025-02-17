import { useInfiniteQuery } from "react-query";

import api from "@Api";
import { postQueryKeys } from "@Utility/queryKey";

import { GetPostRequest } from "@Api/post/interface/getPostRequest";

const useGetLatestPostInfiniteList = (getPostRequest: GetPostRequest) => {
  const { dateScope, sortScope, page, maxContent } = getPostRequest;

  return useInfiniteQuery(
    postQueryKeys.postListInfiniteLatest(),
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
        const lastPagesListCount = lastPages.list.length;

        if (lastPagesListCount !== 0 && lastPagesListCount % maxContent === 0) {
          return nextPage;
        }
        return null;
      },
    }
  );
};

export default useGetLatestPostInfiniteList;
