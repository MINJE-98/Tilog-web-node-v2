import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetUserPostInfiniteList from "@Queries/posts/useGetUserPostInfiniteList";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

interface BlogPostListProps {
  categoryName: string;
  userId: GetUserProfileResponse["id"];
}
const BlogPostList = ({ categoryName, userId }: BlogPostListProps) => {
  const userPostList = useGetUserPostInfiniteList({
    dateScope: "All",
    sortScope: "createdAt",
    page: 0,
    categoryName,
    maxContent: 10,
    userId,
  });
  return (
    <PostCardInfiniteList CardComponent={PostCard} postList={userPostList} />
  );
};

export default withSuspenseAndErrorBoundary(BlogPostList);
