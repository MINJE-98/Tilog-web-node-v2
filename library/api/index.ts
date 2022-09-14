import authService from "@Api/auth";
import categoryService from "@Api/category";
import { repoService, statsService } from "@Api/github";
import { postService, postLikeService, commentService } from "@Api/post";
import usersService from "@Api/users";

export default {
  authService,
  usersService,
  categoryService,
  postService,
  postLikeService,
  commentService,
  repoService,
  statsService,
};
