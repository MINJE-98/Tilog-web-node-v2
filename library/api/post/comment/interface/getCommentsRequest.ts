import { Comments } from "@Api/interface/model";

export default interface GetCommentsRequest {
  postId: Comments["postsID"];
  replyTo?: Comments["replyTo"];
}
