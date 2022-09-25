import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useDateScopeRouter from "@Hooks/useDateScopeRouter";
import useGetMostPopularPostInfiniteList from "@Queries/posts/useGetMostPopularPostInfiniteList";

const PopularPostList = () => {
  const dateScope = useDateScopeRouter();
  const popularPostList = useGetMostPopularPostInfiniteList({
    dateScope,
    sortScope: "likes",
    page: 0,
    maxContent: 10,
  });
  return (
    <PostCardInfiniteList
      twoRow
      CardComponent={PostCard}
      postList={popularPostList}
    />
  );
};

export default withSuspenseAndErrorBoundary(PopularPostList);
