import { useQuery } from "react-query";

import api from "@Api";
import { postQueryKeys } from "@Utility/queryKey";

import { Posts } from "@Api/interface/model";

const useGetPostDetail = (postId: Posts["id"]) => {
  return useQuery(
    postQueryKeys.detailPostId(postId),
    () => api.postService.getPostDetail(postId),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
};

export default useGetPostDetail;
