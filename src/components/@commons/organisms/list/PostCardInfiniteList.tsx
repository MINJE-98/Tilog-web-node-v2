import Image from "next/image";
import React from "react";

import { UseInfiniteQueryResult } from "react-query";

import EmptyContentsCard from "@Commons/molecules/card/EmptyContentsCard";
import CardInfiniteLoading from "@Commons/molecules/loading/CardInfiniteLoading";
import image from "@Public/asset/open-box.png";
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
  if (!postList?.data) return null;
  return (
    <>
      <div
        className={`grid gap-3 grid-row justify-center ${
          twoRow ? "md:grid-cols-2" : ""
        }`}
      >
        {postList.data.pages.map((postPage, idx) => {
          if (idx === 0 && isArrayEmpty(postPage.list))
            return (
              <EmptyContentsCard
                Icon={
                  <Image
                    alt="emptyContents"
                    src={image}
                    width={100}
                    height={100}
                  />
                }
                title="작성된 포스트가 없어요."
                subTitle={<p>다른 카테고리로 검색해보세요!</p>}
              />
            );
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
