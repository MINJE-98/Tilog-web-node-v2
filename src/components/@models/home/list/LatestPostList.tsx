import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetLatestPostInfiniteList from "@Queries/posts/useGetLatestPostInfiniteList";

const LatestPostList = () => {
  const latestPostList = useGetLatestPostInfiniteList({
    dateScope: "All",
    sortScope: "createdAt",
    page: 0,
    maxContent: 6,
  });
  return (
    <PostCardInfiniteList CardComponent={PostCard} postList={latestPostList} />
  );
};

export default withSuspenseAndErrorBoundary(LatestPostList);
