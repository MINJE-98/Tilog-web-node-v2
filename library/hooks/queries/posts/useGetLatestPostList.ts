import { useQuery } from "react-query";

import api from "@Api";
import { postQueryKeys } from "@Utility/queryKey";

import { GetPostRequest } from "@Api/post/interface/getPostRequest";

const useGetLatestPostList = (getPostRequest: GetPostRequest) => {
  const { dateScope, sortScope, page, maxContent } = getPostRequest;

  return useQuery(
    postQueryKeys.postListLatest(),
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
      suspense: true,
    }
  );
};

export default useGetLatestPostList;
