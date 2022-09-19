import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import Spinner from "@Commons/atom/Spinner";

const MostPopularPostCardList = dynamic(
  () => import("@Components/home/list/MostPopularPostCardList"),
  {
    ssr: false,
  }
);

const LatestPostCardList = dynamic(
  () => import("@Components/home/list/LatestPostCardList"),
  {
    ssr: false,
  }
);
const PostSection = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary fallback={<>에러 났어.</>}>
        <MostPopularPostCardList />
        <LatestPostCardList />
      </ErrorBoundary>
    </Suspense>
  );
};

export default PostSection;
