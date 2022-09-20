import { useQuery } from "react-query";

import api from "@Api";
import { commentQueryKeys } from "@Utility/queryKey";

const useGetParentComment = (postId: string) => {
  return useQuery(
    commentQueryKeys.commentParent(postId),
    () => api.commentService.getComments({ postId }),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  );
};

export default useGetParentComment;
