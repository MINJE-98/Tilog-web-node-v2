import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

import api from "@Api";

import { ExceptionInterface } from "@Api/exception/interface";
import LikedRequestDto from "@Api/post/like/interface/LikedRequestDto";

export default function useLikeMutation() {
  const queryClient = useQueryClient();
  return useMutation<
    AxiosResponse<void, ExceptionInterface>,
    ExceptionInterface,
    string
  >((postId: LikedRequestDto) => api.postLikeService.toggleLike(postId), {
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      }
    },
    onSuccess(_data, variables) {
      queryClient.getQueriesData(["post-detail", variables]);
      queryClient.refetchQueries(["like", variables]);
    },
  });
}
