import categoryService from "@Api/category";
import { tilogApi, tilogApiConfig } from "@Api/http-client";
import CommentRepository from "@Api/post/comment/commentRepository";
import CommentService from "@Api/post/comment/commentService";
import PostLikeRepository from "@Api/post/like/postLikeRepository";
import PostLikeService from "@Api/post/like/postLikeService";
import PostRepository from "@Api/post/postRepository";
import PostService from "@Api/post/postService";

const postRepository = new PostRepository({
  axios: tilogApi.axios,
  configuration: tilogApiConfig,
});
const postLikeRepository = new PostLikeRepository({
  axios: tilogApi.axios,
  configuration: tilogApiConfig,
});
const commentRepository = new CommentRepository({
  axios: tilogApi.axios,
  configuration: tilogApiConfig,
});

const postService = new PostService(postRepository, categoryService);
const postLikeService = new PostLikeService(postLikeRepository);
const commentService = new CommentService(commentRepository);

export { postService, postLikeService, commentService };
