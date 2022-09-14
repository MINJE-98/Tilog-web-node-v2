import { AxiosRequestConfig } from "axios";

import validateToken from "@Api/auth/validateTokenDecorator";
import PostLikeRepository from "@Api/post/like/postLikeRepository";

import LikedRequestDto from "@Api/post/like/interface/likedRequestDto";
import PostHasLikeDto from "@Api/post/like/interface/postHasLikeDto";

export default class PostLikeService {
  constructor(private readonly postLikeRepository: PostLikeRepository) {}

  @validateToken()
  hasLiked(postHasLike: PostHasLikeDto, options?: AxiosRequestConfig) {
    return this.postLikeRepository.postsLikeControllerHasLiked(
      postHasLike.postId,
      options
    );
  }

  @validateToken()
  async toggleLike(
    likedRequest: LikedRequestDto,
    options?: AxiosRequestConfig
  ) {
    const { data } = await this.hasLiked(likedRequest, options);
    const isLiked = data.like;

    if (isLiked)
      return this.postLikeRepository.postsLikeControllerUnsetLike(
        likedRequest,
        options
      );
    return this.postLikeRepository.postsLikeControllerSetLike(
      likedRequest,
      options
    );
  }
}
