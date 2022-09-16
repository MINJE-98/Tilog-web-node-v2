import React from "react";

import { AxiosResponse } from "axios";

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
  postList: AxiosResponse<GetPostsResponseDto, any> | undefined;
}

const PostCardList = ({ CardComponent, postList }: PostCardListProps) => {
  if (!postList) return <p>{NO_EXIST_POSTS}</p>;
  return (
    <>
      {postList.data.list.map((post, idex) => (
        <CardComponent key={post.id} index={idex + 1} post={post} />
      ))}
    </>
  );
};

export default PostCardList;
