import React from "react";

import Thumbnail from "@Commons/atom/images/thumbnail/Thumbnail";
import EmptyThumbnail from "@Components/@commons/atom/images/thumbnail/EmptyThumbnail";
import { seededColor } from "@Utility/color";

import { GetPostsItem } from "@til-log.lab/tilog-api";

interface PostImageProps {
  id: GetPostsItem["id"];
  title: GetPostsItem["title"];
  thumbnailUrl: GetPostsItem["thumbnailUrl"];
}

const PostThumbnail = ({ id, thumbnailUrl, title }: PostImageProps) => {
  if (thumbnailUrl) {
    return <Thumbnail thumbnailUrl={thumbnailUrl} />;
  }

  const color = seededColor(id);
  return <EmptyThumbnail title={title} color={color} />;
};

export default PostThumbnail;
