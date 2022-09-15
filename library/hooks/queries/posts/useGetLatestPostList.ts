import { useQuery } from "react-query";

import api from "@Api";

import { GetPostRequest } from "@Api/post/interface/getPostRequest";

const useGetLatestPostList = (getPostRequest: GetPostRequest) => {
  const { dateScope, sortScope, page, maxContent } = getPostRequest;

  return useQuery(
    ["latestPostList"],
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
    }
  );
};

export default useGetLatestPostList;
