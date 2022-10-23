import React from "react";

import ThumbnailImage from "@Commons/atom/images/thumbnail/ThumbnailImage";

import { GetPostsItem } from "@til-log.lab/tilog-api";

interface PostThumbnailImageProps {
  id: GetPostsItem["id"];
  title: GetPostsItem["title"];
  thumbnailUrl: GetPostsItem["thumbnailUrl"];
  sizes: string;
  fontSize?: number;
}

const PostThumbnailImage = ({
  id,
  thumbnailUrl,
  title,
  sizes,
  fontSize,
}: PostThumbnailImageProps) => {
  if (thumbnailUrl) {
    return <ThumbnailImage sizes={sizes} thumbnailUrl={thumbnailUrl} />;
  }

  return (
    <ThumbnailImage
      sizes={sizes}
      thumbnailUrl={`https://og.tilog.link/${title}.png?md=1&fontSize=${fontSize}px&seed=${id}`}
    />
  );
};

export default PostThumbnailImage;
