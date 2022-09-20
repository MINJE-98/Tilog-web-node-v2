import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

import Spinner from "@Commons/atom/Spinner";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import useStringRouter from "@Hooks/useStringRouter";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const BlogPostList = dynamic(
  () => import("@Components/blog/list/BlogPostList"),
  { ssr: false }
);

const BlogPostSection = ({
  userId,
}: {
  userId: GetUserProfileResponse["id"];
}) => {
  const category = useStringRouter("category");
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <div className="mt-10 md:mt-0">
          <CardNavTitle>{category} Posts</CardNavTitle>
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary onReset={reset} fallbackRender={ComponentLoadError}>
              <BlogPostList categoryName={category} userId={userId} />
            </ErrorBoundary>
          </Suspense>
        </div>
      )}
    </QueryErrorResetBoundary>
  );
};
export default BlogPostSection;
