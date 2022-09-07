import authService from "@Api/auth";
import categoryService from "@Api/category";
import { postService, postLikeService, commentService } from "@Api/post";
import usersService from "@Api/users";

export default {
  authService,
  usersService,
  categoryService,
  postService,
  postLikeService,
  commentService,
};
