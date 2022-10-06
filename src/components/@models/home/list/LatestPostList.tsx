import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import useGetMostPopularPostInfiniteList from "@Queries/posts/useGetMostPopularPostInfiniteList";

const LatestPostList = () => {
  const latestPostList = useGetMostPopularPostInfiniteList({
    dateScope: "All",
    sortScope: "createdAt",
    page: 0,
    maxContent: 6,
  });
  return (
    <PostCardInfiniteList
      twoRow
      CardComponent={PostCard}
      postList={latestPostList}
    />
  );
};

export default LatestPostList;
