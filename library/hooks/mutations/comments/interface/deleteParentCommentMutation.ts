import {
  DeleteCommentRequestDto,
  GetCommentsItem,
} from "@til-log.lab/tilog-api";

export default interface DeleteParentCommentMutation
  extends DeleteCommentRequestDto {
  postId: GetCommentsItem["postId"];
  replyTo?: GetCommentsItem["replyTo"];
}
