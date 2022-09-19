import React from "react";

import Thumbnail from "@Commons/atom/images/thumbnail/Thumbnail";
import EmptyThumbnail from "@Components/@commons/atom/images/thumbnail/EmptyThumbnail";
import { backgroundColor, getBrightness, seededColor } from "@Utility/color";

import { GetPostsItem } from "@til-log.lab/tilog-api";

interface PostImageProps {
  id: GetPostsItem["id"];
  title: GetPostsItem["title"];
  thumbnailUrl: GetPostsItem["thumbnailUrl"];
  fontSize?: "base" | "lg" | "xl" | "2xl";
}

const PostThumbnail = ({
  id,
  thumbnailUrl,
  title,
  fontSize = "base",
}: PostImageProps) => {
  if (thumbnailUrl) {
    return <Thumbnail thumbnailUrl={thumbnailUrl} />;
  }

  const color = seededColor(id);
  return (
    <EmptyThumbnail
      fontSize={fontSize}
      title={title}
      backgroundColor={getBrightness(color) ? "#121212" : "#fff"}
      getBrightness={backgroundColor(color)}
    />
  );
};

export default PostThumbnail;
