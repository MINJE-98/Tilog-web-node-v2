import {
  GetCommentsItem,
  GetPostDetailResponseDto,
  UpdateCommentRequestDto,
} from "@til-log.lab/tilog-api";

export default interface UpdateParentCommentMutation
  extends UpdateCommentRequestDto {
  postId: GetPostDetailResponseDto["id"];
  replyTo: GetCommentsItem["replyTo"];
}
