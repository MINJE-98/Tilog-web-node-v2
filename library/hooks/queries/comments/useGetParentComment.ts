import { useQuery } from "react-query";

import api from "@Api";

const useGetParentComment = (postId: string) => {
  return useQuery(
    ["commentParent", postId],
    () => api.commentService.getComments({ postId }),
    {
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

export default useGetParentComment;
