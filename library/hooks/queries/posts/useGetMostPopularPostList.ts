import { useQuery } from "react-query";

import api from "@Api";
import { postQueryKeys } from "@Utility/queryKey";

import { GetPostRequest } from "@Api/post/interface/getPostRequest";

const useGetMostPopularPostList = (getPostRequest: GetPostRequest) => {
  const { dateScope, sortScope, maxContent, page } = getPostRequest;
  return useQuery(
    postQueryKeys.postListPopularDateScope(dateScope),
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
      useErrorBoundary: true,
    }
  );
};

export default useGetMostPopularPostList;
