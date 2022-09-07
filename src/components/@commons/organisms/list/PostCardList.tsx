import React from "react";

import CardLoading from "@Commons/molecules/card/CardLoading";
import PostCard from "@Commons/molecules/card/post/PostCard";
import useGetPostListQuery from "@Queries/posts/useGetPostListQuery";
import isArrayEmpty from "@Utility/isArrayEmpty";

import GetPostRequestDto from "@Api/post/interface/getPostRequestDto";

interface PostCardListProps {
  dateScope: GetPostRequestDto["dateScope"];
  sortScope: GetPostRequestDto["sortScope"];
  page: GetPostRequestDto["page"];
  maxContent: GetPostRequestDto["maxContent"];
  userId?: GetPostRequestDto["userId"];
  categoryName?: string;
  row?: string;
}

const PostCardList = ({
  dateScope,
  sortScope,
  page,
  maxContent,
  userId,
  categoryName,
  row = "none",
}: PostCardListProps) => {
  const postList = useGetPostListQuery({
    dateScope,
    sortScope,
    page,
    maxContent,
    userId,
    categoryName,
  });
  if (postList.isError) {
    return <div>에러발생!</div>;
  }
  if (postList.isLoading) {
    return <div>로딩중...</div>;
  }
  if (!postList.data) return null;

  return (
    <div>
      <div className={`grid gap-3 grid-row md:grid-cols-${row}`}>
        {postList.isSuccess &&
          postList.data.pages.map((postPage) => {
            if (isArrayEmpty(postPage.data.list))
              return <h3>인기 게시글이 없습니다.</h3>;
            return postPage.data.list.map((post) => (
              <PostCard key={post.id} post={post} />
            ));
          })}
      </div>
      <CardLoading
        hasNextPage={postList.hasNextPage}
        isFetchingNextPage={postList.isFetchingNextPage}
        fetchNextPage={postList.fetchNextPage}
      />
    </div>
  );
};

export default PostCardList;
