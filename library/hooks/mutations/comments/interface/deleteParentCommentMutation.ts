import { DeleteCommentRequestDto } from "@til-log.lab/tilog-api";

import { Comments } from "@Api/interface/model";

export default interface DeleteParentCommentMutation
  extends DeleteCommentRequestDto {
  postId: Comments["postsID"];
  replyTo: Comments["replyTo"] | null;
}
