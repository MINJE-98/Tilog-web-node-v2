import React from "react";

import MostPopularPostCard from "@Commons/molecules/card/post/MostPopularPostCard";
import useGetMostPopularPostListQuery from "@Queries/posts/useGetMostPopularPostListQuery";
import isArrayEmpty from "@Utility/isArrayEmpty";

import GetPostRequestDto from "@Api/post/interface/getPostRequestDto";

interface MostPopularPostCardListProps {
  sortScope: GetPostRequestDto["sortScope"];
  page: GetPostRequestDto["page"];
  maxContent: GetPostRequestDto["maxContent"];
  categoryName?: string;
}

const MostPopularPostCardList = ({
  sortScope,
  page,
  maxContent,
  categoryName,
}: MostPopularPostCardListProps) => {
  const postList = useGetMostPopularPostListQuery({
    dateScope: "All",
    sortScope,
    page,
    maxContent,
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
      <div className="grid grid-row md:grid-cols-2 xl:grid-cols-3 gap-y-3">
        {postList.isSuccess &&
          postList.data.pages.map((postPage) => {
            if (isArrayEmpty(postPage.data.list))
              return <h3>인기 게시글이 없습니다.</h3>;
            return postPage.data.list.map((post, idx) => (
              <MostPopularPostCard key={post.id} index={idx + 1} post={post} />
            ));
          })}
      </div>
    </div>
  );
};

export default MostPopularPostCardList;
