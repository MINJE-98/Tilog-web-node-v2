import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import api from "@Api";

import { HasLikedResponseDto } from "@til-log.lab/tilog-api";

import { ExceptionInterface } from "@Api/exception/interface";
import PostHasLikeDto from "@Api/post/like/interface/postHasLikeDto";

export default function useGetHasLikeQuery(postId: PostHasLikeDto["postId"]) {
  return useQuery<
    AxiosResponse<HasLikedResponseDto>,
    ExceptionInterface,
    AxiosResponse<HasLikedResponseDto>
  >(["like", postId], () => api.postLikeService.hasLiked(postId), {
    retry: 0,
    refetchOnWindowFocus: false,
  });
}
