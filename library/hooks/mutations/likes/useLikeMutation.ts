import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

import api from "@Api";

import LikedRequestDto from "@Api/post/like/interface/likedRequestDto";

export default function useLikeMutation() {
  const queryClient = useQueryClient();
  return useMutation(
    (postId: LikedRequestDto) => api.postLikeService.toggleLike(postId),
    {
      onError: (error) => {
        if (error instanceof Error) toast.error(error.message);
      },
      onSuccess(_data, variables) {
        queryClient.refetchQueries(["post-detail", variables]);
        queryClient.refetchQueries(["like", variables]);
      },
    }
  );
}
