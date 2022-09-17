import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import Spinner from "@Commons/atom/loading/Spinner";
import UserBlogLink from "@Components/post/link/UserBlogLink";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

const UserInfoProfile = dynamic(
  () => import("@Commons/organisms/profile/UserInfoProfile"),
  {
    ssr: false,
  }
);
interface PostWriterProps {
  username: PostDetailUserInfoItem["username"];
}

const PostWriter = ({ username }: PostWriterProps) => {
  return (
    <div className="w-full p-5">
      <Suspense fallback={<Spinner size="w-1 h-1" />}>
        <ErrorBoundary fallback={<>에러 났어.</>}>
          <UserInfoProfile userName={username} />
        </ErrorBoundary>
      </Suspense>
      <UserBlogLink userName={username} />
    </div>
  );
};

export default PostWriter;
