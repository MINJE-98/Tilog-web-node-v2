import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardList from "@Commons/organisms/list/PostCardList";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetLatestPostList from "@Queries/posts/useGetLatestPostList";

const LatestPostCardList = () => {
  const latestPostList = useGetLatestPostList({
    dateScope: "All",
    sortScope: "createdAt",
    page: 0,
    maxContent: 6,
  });
  return (
    <PostCardList CardComponent={PostCard} postList={latestPostList.data} />
  );
};

export default withSuspenseAndErrorBoundary(LatestPostCardList);
