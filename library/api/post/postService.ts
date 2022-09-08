import { AxiosRequestConfig, AxiosResponse } from "axios";

import validateToken from "@Api/auth/validateTokenDecorator";
import PostRepository from "@Api/post/postRepository";

import {
  CreatePostRequestBodyDto,
  GetPostDetailResponseDto,
  GetPostsResponseDto,
  ModifyPostRequestBodyDto,
} from "@til-log.lab/tilog-api";

import { ExceptionInterface } from "@Api/exception/interface";
import GetPostRequestDto from "@Api/post/interface/getPostRequestDto";

export default class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  @validateToken()
  createPost(
    createPostRequestBodyDto: CreatePostRequestBodyDto,
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    return this.postRepository.createPost(createPostRequestBodyDto, options);
  }

  getPostDetail(
    postId: string,
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<GetPostDetailResponseDto, ExceptionInterface>> {
    return this.postRepository.getPostDetail(postId, options);
  }

  getPosts(
    dateScope: GetPostRequestDto["dateScope"],
    sortScope: GetPostRequestDto["sortScope"],
    page: GetPostRequestDto["page"],
    maxContent: GetPostRequestDto["maxContent"],
    userId?: GetPostRequestDto["userId"],
    categoryId?: GetPostRequestDto["categoryId"],
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<GetPostsResponseDto, ExceptionInterface>> {
    return this.postRepository.getPosts(
      dateScope,
      sortScope,
      page,
      maxContent,
      userId,
      categoryId,
      options
    );
  }

  @validateToken()
  modifyPost(
    post: ModifyPostRequestBodyDto,
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    return this.postRepository.modifyPost(post, options);
  }
}
