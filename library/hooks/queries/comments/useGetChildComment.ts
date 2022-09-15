import { useQuery } from "react-query";

import api from "@Api";

import GetCommentsRequest from "@Api/post/comment/interface/getCommentsRequest";

const useGetChildComment = (
  isOpen: boolean,
  postId: GetCommentsRequest["postId"],
  replyTo: GetCommentsRequest["replyTo"]
) => {
  return useQuery(
    ["commentChild", postId, replyTo],
    () => api.commentService.getComments({ postId, replyTo }),
    {
      enabled: isOpen,
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  );
};

export default useGetChildComment;
