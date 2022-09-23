import MostPopularPostCard from "@Commons/molecules/card/post/MostPopularPostCard";
import PostCardList from "@Commons/organisms/list/PostCardList";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetMostPopularPostList from "@Queries/posts/useGetMostPopularPostList";

const MostPopularPostCardList = () => {
  const popularPostList = useGetMostPopularPostList({
    dateScope: "All",
    sortScope: "likes",
    page: 0,
    maxContent: 6,
  });
  return (
    <PostCardList
      CardComponent={MostPopularPostCard}
      postList={popularPostList.data}
    />
  );
};

export default withSuspenseAndErrorBoundary(MostPopularPostCardList);
