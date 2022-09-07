import { tilogApi } from "@Api/http-client";
import CommentRepository from "@Api/post/comment/CommentRepository";
import CommentService from "@Api/post/comment/CommentService";
import PostLikeRepository from "@Api/post/like/postLikeRepository";
import PostLikeService from "@Api/post/like/postLikeService";
import PostRepository from "@Api/post/postRepository";
import PostService from "@Api/post/postService";

const postRepository = new PostRepository({
  axios: tilogApi.http,
  basePath: process.env.TILOG_API,
});
const postLikeRepository = new PostLikeRepository({
  axios: tilogApi.http,
  basePath: process.env.TILOG_API,
});
const commentRepository = new CommentRepository({
  axios: tilogApi.http,
  basePath: process.env.TILOG_API,
});

const postService = new PostService(postRepository);
const postLikeService = new PostLikeService(postLikeRepository);

const commentService = new CommentService(commentRepository);

export { postService, postLikeService, commentService };
