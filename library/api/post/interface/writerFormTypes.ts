import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

export default interface WriterFormTypes {
  postId: GetPostDetailResponseDto["id"] | null;
  subTitle: GetPostDetailResponseDto["subTitle"] | null;
  thumbnailUrl: GetPostDetailResponseDto["thumbnailUrl"] | null;
  markdownContent: GetPostDetailResponseDto["content"] | null;
  category: GetPostDetailResponseDto["category"] | null;
  title: GetPostDetailResponseDto["title"] | null;
  isPrivate: boolean;
}
