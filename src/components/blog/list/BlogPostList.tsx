import CardTitle from "@Commons/atom/CardTitle";
import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import useStringRouter from "@Hooks/useStringRouter";
import useGetUserPostInfiniteList from "@Queries/posts/useGetUserPostInfiniteList";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const BlogPostList = ({ userId }: { userId: GetUserProfileResponse["id"] }) => {
  const category = useStringRouter("category");
  const userPostList = useGetUserPostInfiniteList({
    dateScope: "All",
    sortScope: "createdAt",
    page: 0,
    categoryName: category,
    maxContent: 10,
    userId,
  });
  return (
    <section>
      <CardTitle>{category} 게시글</CardTitle>
      <main>
        <PostCardInfiniteList
          CardComponent={PostCard}
          postList={userPostList}
        />
      </main>
    </section>
  );
};

export default BlogPostList;
