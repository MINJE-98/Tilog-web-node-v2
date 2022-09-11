import { AxiosRequestConfig, AxiosResponse } from "axios";

import {
  CreatePostRequestBodyDto,
  GetPostDetailResponseDto,
  GetPostsResponseDto,
  ModifyPostRequestBodyDto,
  PostApi,
} from "@til-log.lab/tilog-api";

import { ExceptionInterface } from "@Api/exception/interface";
import RepositoryConfig from "@Api/interface/RepositoryConfig";

export default class PostRepository {
  protected postApi: PostApi;

  constructor(readonly repositoryConfig: RepositoryConfig) {
    this.postApi = new PostApi(
      repositoryConfig.configuration,
      repositoryConfig.basePath,
      repositoryConfig.axios
    );
  }

  createPost(
    createPostRequestBodyDto: CreatePostRequestBodyDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any, ExceptionInterface>> {
    // NOTE: 실제 반환 타입이 CreatePostResponseDto인데 void로 되어있어서 any로 임시 지정
    return this.postApi.postsControllerCreatePost(
      createPostRequestBodyDto,
      options
    );
  }
  getPostDetail(
    postId: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetPostDetailResponseDto, ExceptionInterface>> {
    return this.postApi.postsControllerGetPostDetail(postId, options);
  }
  getPosts(
    dateScope: "All" | "Daily" | "Weekly" | "Monthly",
    sortScope: "likes" | "viewCounts" | "createdAt",
    page: number,
    maxContent: number,
    userId?: number,
    categoryId?: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetPostsResponseDto, ExceptionInterface>> {
    return this.postApi.postsControllerGetPosts(
      dateScope,
      sortScope,
      page,
      maxContent,
      userId,
      categoryId,
      options
    );
  }

  deletePost(postId: string) {
    return this.repositoryConfig.axios.delete(
      `${this.repositoryConfig.basePath}/posts`,
      {
        data: {
          postId,
        },
      }
    );
  }
  modifyPost(
    modifyPostRequestBodyDto: ModifyPostRequestBodyDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    return this.postApi.postsControllerModifyPost(
      modifyPostRequestBodyDto,
      options
    );
  }
}
