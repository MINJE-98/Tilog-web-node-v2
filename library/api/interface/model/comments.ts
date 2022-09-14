import { Posts } from "@Api/interface/model/posts";
import { Users } from "@Api/interface/model/users";

export interface Comments {
  id: string;
  usersID: Users["id"];
  postsID: Posts["id"];
  content: string;
  replyTo?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
