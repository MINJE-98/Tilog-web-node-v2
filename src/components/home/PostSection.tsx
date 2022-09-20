import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

import Spinner from "@Commons/atom/Spinner";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";
import More from "@Commons/molecules/link/More";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import { ALL_LATEST_POST, ALL_MOST_POPULAR_POST } from "@Constants/text";

const LatestPostCardList = dynamic(
  () => import("@Components/home/list/LatestPostCardList"),
  { ssr: false }
);

const MostPopularPostCardList = dynamic(
  () => import("@Components/home/list/MostPopularPostCardList"),
  { ssr: false }
);

const PostSection = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <>
          <section className="my-10">
            <CardNavTitle nav={<More href="latest" />}>
              {ALL_LATEST_POST}
            </CardNavTitle>
            <Suspense fallback={<Spinner />}>
              <ErrorBoundary
                onReset={reset}
                fallbackRender={ComponentLoadError}
              >
                <MostPopularPostCardList />
              </ErrorBoundary>
            </Suspense>
          </section>
          <section className="my-10">
            <CardNavTitle nav={<More href="popular" />}>
              {ALL_MOST_POPULAR_POST}
            </CardNavTitle>
            <Suspense fallback={<Spinner />}>
              <ErrorBoundary
                onReset={reset}
                fallbackRender={ComponentLoadError}
              >
                <LatestPostCardList />
              </ErrorBoundary>
            </Suspense>
          </section>
        </>
      )}
    </QueryErrorResetBoundary>
  );
};

export default PostSection;
