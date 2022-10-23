import React from "react";

import ThumbnailImage from "@Commons/atom/images/thumbnail/ThumbnailImage";

import { GetPostsItem } from "@til-log.lab/tilog-api";

interface PostThumbnailImageProps {
  id: GetPostsItem["id"];
  title: GetPostsItem["title"];
  thumbnailUrl: GetPostsItem["thumbnailUrl"];
  fontSize?: number;
}

const PostThumbnailImage = ({
  id,
  thumbnailUrl,
  title,
  fontSize,
}: PostThumbnailImageProps) => {
  if (thumbnailUrl) {
    return <ThumbnailImage thumbnailUrl={thumbnailUrl} />;
  }

  return (
    <ThumbnailImage
      thumbnailUrl={`https://og.tilog.link/${title}.png?md=1&fontSize=${fontSize}px&seed=${id}`}
    />
  );
};

export default PostThumbnailImage;
