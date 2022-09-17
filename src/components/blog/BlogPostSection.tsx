import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import Spinner from "@Commons/atom/loading/Spinner";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const BlogPostList = dynamic(
  () => import("@Components/blog/list/BlogPostList"),
  {
    ssr: false,
  }
);

const BlogPostSection = ({
  userId,
}: {
  userId: GetUserProfileResponse["id"];
}) => {
  return (
    <div className="mt-10 md:mt-0">
      <Suspense fallback={<Spinner size="20" />}>
        <ErrorBoundary fallback={<>에러 났어.</>}>
          <BlogPostList userId={userId} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};
export default BlogPostSection;
