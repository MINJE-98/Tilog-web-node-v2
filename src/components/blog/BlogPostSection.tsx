import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import CardTitle from "@Commons/atom/CardTitle";
import PostCard from "@Commons/molecules/card/post/PostCard";
import useStringRouter from "@Hooks/useStringRouter";
import useGetUserPostInfiniteList from "@Queries/posts/useGetUserPostInfiniteList";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const PostCardInfiniteList = dynamic(
  () => import("@Commons/organisms/list/PostCardInfiniteList"),
  {
    suspense: true,
    ssr: false,
  }
);

const BlogPostSection = ({
  userId,
}: {
  userId: GetUserProfileResponse["id"];
}) => {
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
      <Suspense fallback={<>로딩중이야.</>}>
        <ErrorBoundary fallback={<>에러 났어.</>}>
          <CardTitle>{category} 게시글</CardTitle>
          <PostCardInfiniteList
            CardComponent={PostCard}
            postList={userPostList}
          />
        </ErrorBoundary>
      </Suspense>
    </section>
  );
};
export default BlogPostSection;
