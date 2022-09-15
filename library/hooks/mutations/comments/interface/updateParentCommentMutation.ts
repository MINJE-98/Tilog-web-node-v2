import { UpdateCommentRequestDto } from "@til-log.lab/tilog-api";

import { Comments } from "@Api/interface/model";

export default interface UpdateParentCommentMutation
  extends UpdateCommentRequestDto {
  postId: Comments["postsID"];
  replyTo: Comments["replyTo"] | null;
}
