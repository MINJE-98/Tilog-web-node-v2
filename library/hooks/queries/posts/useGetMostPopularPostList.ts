import { useQuery } from "react-query";

import api from "@Api";

import { GetPostRequest } from "@Api/post/interface/getPostRequest";

const useGetMostPopularPostList = (getPostRequest: GetPostRequest) => {
  const { dateScope, sortScope, maxContent, page } = getPostRequest;
  return useQuery(
    ["mostPopularPostList", dateScope],
    () => {
      return api.postService.getPosts({
        dateScope,
        sortScope,
        page,
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
      suspense: true,
      useErrorBoundary: true,
    }
  );
};

export default useGetMostPopularPostList;
