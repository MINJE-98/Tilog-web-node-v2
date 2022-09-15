import { useQuery } from "react-query";

import api from "@Api";

import { Users } from "@Api/interface/model";
import PostHasLikeDto from "@Api/post/like/interface/postHasLikeDto";

export default function useGetHasLike(
  userId: Users["id"],
  postId: PostHasLikeDto["postId"]
) {
  return useQuery(
    ["like", postId, userId],
    () => api.postLikeService.hasLiked({ postId }),
    {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );
}
