import React from "react";

import ThumbnailImage from "@Commons/atom/images/thumbnail/ThumbnailImage";
import EmptyThumbnailImage from "@Components/@commons/atom/images/thumbnail/EmptyThumbnailImage";
import { backgroundColor, getBrightness, seededColor } from "@Utility/color";

import { GetPostsItem } from "@til-log.lab/tilog-api";

import TailwindSize from "@Components/interface/fontSize";

interface PostThumbnailImageProps {
  id: GetPostsItem["id"];
  title: GetPostsItem["title"];
  thumbnailUrl: GetPostsItem["thumbnailUrl"];
  fontSize?: TailwindSize;
}

const PostThumbnailImage = ({
  id,
  thumbnailUrl,
  title,
  fontSize = "base",
}: PostThumbnailImageProps) => {
  if (thumbnailUrl) {
    return <ThumbnailImage thumbnailUrl={thumbnailUrl} />;
  }

  const color = seededColor(id);
  return (
    <EmptyThumbnailImage
      fontSize={fontSize}
      title={title}
      backgroundColor={backgroundColor(color)}
      getBrightness={getBrightness(color) ? "#121212" : "#fff"}
    />
  );
};

export default PostThumbnailImage;
