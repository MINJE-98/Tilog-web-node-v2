import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import useGetSearchPostInfiniteList from "@Queries/posts/useGetSearchPostInfiniteList";

const SearchPostList = ({ categoryName }: { categoryName: string }) => {
  const searchPostList = useGetSearchPostInfiniteList({
    dateScope: "All",
    sortScope: "createdAt",
    page: 0,
    categoryName,
    maxContent: 10,
  });
  return (
    <PostCardInfiniteList
      twoRow
      CardComponent={PostCard}
      postList={searchPostList}
    />
  );
};

export default SearchPostList;
