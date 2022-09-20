import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

export default interface WriterFormTypes {
  postId: GetPostDetailResponseDto["id"];
  subTitle: GetPostDetailResponseDto["subTitle"];
  thumbnailUrl: GetPostDetailResponseDto["thumbnailUrl"];
  markdownContent: GetPostDetailResponseDto["content"];
  category: GetPostDetailResponseDto["category"];
  title: GetPostDetailResponseDto["title"];
  isPrivate: boolean;
}
