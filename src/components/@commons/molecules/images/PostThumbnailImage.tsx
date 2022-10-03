import React from "react";

import EmptyThumbnailImage from "@Commons/atom/images/thumbnail/EmptyThumbnailImage";
import ThumbnailImage from "@Commons/atom/images/thumbnail/ThumbnailImage";
import { backgroundColor, getBrightness } from "@Utility/color";

import { GetPostsItem } from "@til-log.lab/tilog-api";

import TailwindSize from "@Models/interface/fontSize";

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

  return (
    <EmptyThumbnailImage
      fontSize={fontSize}
      title={title}
      backgroundColor={backgroundColor(id)}
      getBrightness={getBrightness(id) ? "#121212" : "#fff"}
    />
  );
};

export default PostThumbnailImage;
