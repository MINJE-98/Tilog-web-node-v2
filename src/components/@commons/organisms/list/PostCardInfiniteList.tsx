import React from "react";

import { AxiosResponse } from "axios";
import { UseInfiniteQueryResult } from "react-query";

import CardLoading from "@Commons/molecules/card/CardLoading";
import { NO_EXIST_POSTS } from "@Constants/text/noExistPost";
import isArrayEmpty from "@Utility/isArrayEmpty";

import { GetPostsItem, GetPostsResponseDto } from "@til-log.lab/tilog-api";

interface PostCardInfiniteListProps {
  CardComponent: ({ post }: { post: GetPostsItem }) => JSX.Element;
  postList: UseInfiniteQueryResult<AxiosResponse<GetPostsResponseDto>>;
}

const PostCardInfiniteList = ({
  CardComponent,
  postList,
}: PostCardInfiniteListProps) => {
  if (!postList.data) return <p>{NO_EXIST_POSTS}</p>;
  return (
    <>
      <div>
        {postList.data.pages.map((postPage) => {
          if (isArrayEmpty(postPage.data.list))
            return <h3 key="0">게시글이 존재하지 않습니다.</h3>;
          return postPage.data.list.map((post) => (
            <CardComponent key={post.id} post={post} />
          ));
        })}
      </div>
      <CardLoading postList={postList} />
    </>
  );
};

export default PostCardInfiniteList;
