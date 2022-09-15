import { useQuery } from "react-query";

import api from "@Api";

const useGetPostDetail = (postId: string) => {
  return useQuery(
    ["postDetail", postId],
    () => api.postService.getPostDetail(postId),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
};

export default useGetPostDetail;
