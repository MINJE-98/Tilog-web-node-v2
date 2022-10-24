import React from "react";

import Paragraph from "@Commons/atom/paragraph";
import { NO_EXIST_POSTS } from "@Constants/text/noExistPost";

import { GetPostsItem, GetPostsResponseDto } from "@til-log.lab/tilog-api";

interface PostCardListProps {
  CardComponent: ({
    post,
    index,
  }: {
    post: GetPostsItem;
    index?: number;
  }) => JSX.Element;
  postList?: GetPostsResponseDto;
}

const PostCardList = ({ CardComponent, postList }: PostCardListProps) => {
  if (!postList)
    return <Paragraph fontSize="medium">{NO_EXIST_POSTS}</Paragraph>;
  return (
    <div className="grid gap-3 grid-row md:grid-cols-2">
      {postList.list.map((post, idex) => (
        <CardComponent key={post.id} index={idex + 1} post={post} />
      ))}
    </div>
  );
};

export default PostCardList;
