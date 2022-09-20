import { useQuery } from "react-query";

import api from "@Api";
import { likeQueryKeys } from "@Utility/queryKey";

import PostHasLikeDto from "@Api/post/like/interface/postHasLikeDto";

export default function useGetHasLike(postId: PostHasLikeDto["postId"]) {
  return useQuery(
    likeQueryKeys.likePost(postId),
    () => api.postLikeService.hasLiked({ postId }),
    {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );
}
