import React from "react";

import { UseInfiniteQueryResult } from "react-query";

import CardInfiniteLoading from "@Commons/molecules/loading/CardInfiniteLoading";
import { NO_EXIST_POSTS } from "@Constants/text/noExistPost";
import isArrayEmpty from "@Utility/isArrayEmpty";

import { GetPostsItem, GetPostsResponseDto } from "@til-log.lab/tilog-api";

interface PostCardInfiniteListProps {
  CardComponent: ({ post }: { post: GetPostsItem }) => JSX.Element;
  postList?: UseInfiniteQueryResult<GetPostsResponseDto>;
  twoRow?: boolean;
}

const PostCardInfiniteList = ({
  CardComponent,
  postList,
  twoRow = false,
}: PostCardInfiniteListProps) => {
  if (!postList?.data) return <p>{NO_EXIST_POSTS}</p>;
  return (
    <>
      <div className={`grid gap-3 grid-row ${twoRow ? "md:grid-cols-2" : ""}`}>
        {postList.data.pages.map((postPage, idx) => {
          if (idx === 0 && isArrayEmpty(postPage.list))
            return <h3 key="0">{NO_EXIST_POSTS}</h3>;
          return postPage.list.map((post) => (
            <CardComponent key={post.id} post={post} />
          ));
        })}
      </div>
      <CardInfiniteLoading cardList={postList} />
    </>
  );
};

export default PostCardInfiniteList;
