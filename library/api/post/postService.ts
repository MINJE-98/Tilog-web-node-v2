import { AxiosRequestConfig } from "axios";

import validateToken from "@Api/auth/validateTokenDecorator";
import CategoryService from "@Api/category/categoryService";
import PostRepository from "@Api/post/postRepository";

import {
  CreatePostRequestBodyDto,
  ModifyPostRequestBodyDto,
} from "@til-log.lab/tilog-api";

import { ExceptionInterface } from "@Api/exception/interface";
import { Posts } from "@Api/interface/model";
import { GetPostRequest } from "@Api/post/interface/getPostRequest";
import GetCategoryPostRequest from "@Api/post/interface/getPostRequestCategoryName";

export default class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly categoryService: CategoryService
  ) {}

  @validateToken()
  createPost(
    createPostRequestBodyDto: CreatePostRequestBodyDto,
    options?: AxiosRequestConfig<ExceptionInterface>
  ) {
    return this.postRepository.postsControllerCreatePost(
      createPostRequestBodyDto,
      options
    );
  }

  getPostDetail(
    postId: Posts["id"],
    options?: AxiosRequestConfig<ExceptionInterface>
  ) {
    return this.postRepository.postsControllerGetPostDetail(postId, options);
  }

  @validateToken()
  deletePost(
    postId: Posts["id"],
    options?: AxiosRequestConfig<ExceptionInterface>
  ) {
    return this.postRepository.postsControllerDeletePost(postId, options);
  }

  getPosts(
    getPostRequest: GetPostRequest,
    options?: AxiosRequestConfig<ExceptionInterface>
  ) {
    const { dateScope, sortScope, page, maxContent, userId, categoryId } =
      getPostRequest;
    return this.postRepository.postsControllerGetPosts(
      dateScope,
      sortScope,
      page,
      maxContent,
      userId,
      categoryId,
      options
    );
  }

  async getCategoryPosts(
    getPostRequest: GetCategoryPostRequest,
    options?: AxiosRequestConfig<ExceptionInterface>
  ) {
    const { dateScope, sortScope, page, maxContent, userId, categoryName } =
      getPostRequest;
    const { id } = await this.categoryService.getCategory(categoryName);

    return this.postRepository.postsControllerGetPosts(
      dateScope,
      sortScope,
      page,
      maxContent,
      userId,
      id,
      options
    );
  }

  @validateToken()
  modifyPost(
    modifyPostRequestBody: ModifyPostRequestBodyDto,
    options?: AxiosRequestConfig<ExceptionInterface>
  ) {
    return this.postRepository.postsControllerModifyPost(
      modifyPostRequestBody,
      options
    );
  }
}
