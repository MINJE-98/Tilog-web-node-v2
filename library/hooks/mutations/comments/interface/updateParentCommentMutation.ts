import {
  GetCommentsItem,
  UpdateCommentRequestDto,
} from "@til-log.lab/tilog-api";

export default interface UpdateParentCommentMutation
  extends UpdateCommentRequestDto {
  postId: GetCommentsItem["postId"];
  replyTo: GetCommentsItem["replyTo"];
}
