import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

import Spinner from "@Commons/atom/Spinner";
import PostCard from "@Commons/molecules/card/post/PostCard";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";
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
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary onReset={reset} fallbackRender={ComponentLoadError}>
            <PostCardInfiniteList
              twoRow
              CardComponent={PostCard}
              postList={searchPostList}
            />
          </ErrorBoundary>
        </Suspense>
      )}
    </QueryErrorResetBoundary>
  );
};

export default SearchPostList;
