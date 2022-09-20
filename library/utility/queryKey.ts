import { GetCommentsItem } from "@til-log.lab/tilog-api";

import { Category, Posts, Users } from "@Api/interface/model";
import { GetPostRequest } from "@Api/post/interface/getPostRequest";
import GetCategoryPostRequest from "@Api/post/interface/getPostRequestCategoryName";
import PostHasLikeDto from "@Api/post/like/interface/postHasLikeDto";

export const postQueryKeys = {
  post: ["post"] as const,
  detail: () => [...postQueryKeys.post, "detail"] as const,

  list: () => [...postQueryKeys.post, "list"] as const,

  postListLatest: () => [...postQueryKeys.list(), "latest"] as const,
  postListPopular: () => [...postQueryKeys.list(), "popular"] as const,

  detailPostId: (postId: Posts["id"]) =>
    [...postQueryKeys.detail(), postId] as const,

  postListInfinity: () => [...postQueryKeys.list(), "infinity"] as const,

  postListInfiniteUserCategoryName: (
    userId: GetCategoryPostRequest["userId"],
    categoryName: GetCategoryPostRequest["categoryName"]
  ) => [...postQueryKeys.postListInfinity(), userId, categoryName] as const,

  postListInfiniteLatest: () =>
    [...postQueryKeys.postListInfinity(), "latest"] as const,

  postListInfiniteSearchCategoryName: (
    categoryName: GetCategoryPostRequest["categoryName"]
  ) => [...postQueryKeys.postListInfinity(), "search", categoryName] as const,

  postListPopularDateScope: (dateScope: GetPostRequest["dateScope"]) =>
    [...postQueryKeys.postListPopular(), dateScope] as const,

  postListInfinitePopular: () =>
    [...postQueryKeys.postListInfinity(), "popular"] as const,

  postListInfinitePopularDateScope: (dateScope: GetPostRequest["dateScope"]) =>
    [...postQueryKeys.postListInfinitePopular(), dateScope] as const,
};

export const likeQueryKeys = {
  like: ["like"] as const,
  likePost: (postId: PostHasLikeDto["postId"]) =>
    [...likeQueryKeys.like, postId] as const,
};

export const categoryQueryKeys = {
  all: ["category"] as const,
  categoryUser: (userId: Category["id"]) =>
    [...categoryQueryKeys.all, userId] as const,
  categoryName: (categoryName: Category["categoryName"]) =>
    [...categoryQueryKeys.all, categoryName] as const,
};

export const commentQueryKeys = {
  all: ["comment"] as const,
  commentChild: (
    postId: GetCommentsItem["postId"],
    replyTo?: GetCommentsItem["replyTo"]
  ) => [...commentQueryKeys.all, "child", postId, replyTo] as const,

  commentParent: (postId: GetCommentsItem["postId"]) =>
    [...commentQueryKeys.all, "parent", postId] as const,
};

export const githubQueryKeys = {
  pinnedRepo: (userName: Users["userName"]) => ["pinnedRepo", userName],
  topLanguage: (userName: Users["userName"]) => ["topLanguage", userName],
  userStats: (userName: Users["userName"]) => ["userStats", userName],
};

export const userQueryKeys = {
  all: ["user"],
  getMe: () => [...userQueryKeys.all, "me"],
  userDetail: () => [...userQueryKeys.all, "detail"],
  userDetailUserName: (userName: Users["userName"]) => [
    ...userQueryKeys.userDetail(),
    userName,
  ],
};
