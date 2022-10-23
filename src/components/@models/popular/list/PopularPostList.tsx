/* eslint-disable no-console */
import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetMostPopularPostInfiniteList from "@Queries/posts/useGetMostPopularPostInfiniteList";

const PopularPostList = () => {
  const popularPostList = useGetMostPopularPostInfiniteList({
    dateScope: "All",
    sortScope: "likes",
    page: 0,
    maxContent: 10,
  });
  console.log(popularPostList);
  return (
    <PostCardInfiniteList CardComponent={PostCard} postList={popularPostList} />
  );
};

export default withSuspenseAndErrorBoundary(PopularPostList);
