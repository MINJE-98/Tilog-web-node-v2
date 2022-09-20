import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

import Spinner from "@Commons/atom/Spinner";
import MostPopularPostCard from "@Commons/molecules/card/post/MostPopularPostCard";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";
import PostCardList from "@Commons/organisms/list/PostCardList";
import useGetMostPopularPostList from "@Queries/posts/useGetMostPopularPostList";

const MostPopularPostCardList = () => {
  const popularPostList = useGetMostPopularPostList({
    dateScope: "All",
    sortScope: "likes",
    page: 0,
    maxContent: 6,
  });
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary onReset={reset} fallbackRender={ComponentLoadError}>
            <PostCardList
              CardComponent={MostPopularPostCard}
              postList={popularPostList.data}
            />
          </ErrorBoundary>
        </Suspense>
      )}
    </QueryErrorResetBoundary>
  );
};

export default MostPopularPostCardList;
