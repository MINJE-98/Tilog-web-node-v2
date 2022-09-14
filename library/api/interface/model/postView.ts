import { Posts } from "@Api/interface/model/posts";

export interface PostView {
  id: string;
  userIP: string;
  postsID: Posts["id"];
  viewedAt: Date;
}
