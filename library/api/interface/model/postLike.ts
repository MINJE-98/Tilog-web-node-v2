import { Posts } from "@Api/interface/model/posts";
import { Users } from "@Api/interface/model/users";

export interface PostLike {
  id: string;
  usersID: Users["id"];
  postsID: Posts["id"];
  likedAt: Date;
  deletedAt: Date;
}
