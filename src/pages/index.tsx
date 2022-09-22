import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { DefaultSeo } from "next-seo";
import { ErrorBoundary } from "react-error-boundary";
import {
  dehydrate,
  QueryClient,
  useQueryErrorResetBoundary,
} from "react-query";

import api from "@Api/index";
import Spinner from "@Commons/atom/Spinner";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";
import More from "@Commons/molecules/link/More";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import IntroThumbnail from "@Components/home/IntroThumbnail";
// import LatestPostCardList from "@Components/home/list/LatestPostCardList";
// import MostPopularPostCardList from "@Components/home/list/MostPopularPostCardList";
import { ALL_LATEST_POST, ALL_MOST_POPULAR_POST } from "@Constants/text";
import RootBox from "@Layouts/box/RootBox";
import { rootSeo } from "@SEO";
import { postQueryKeys } from "@Utility/queryKey";

const LatestPostCardList = dynamic(
  () => import("@Components/home/list/LatestPostCardList"),
  {
    suspense: true,
  }
);

const MostPopularPostCardList = dynamic(
  () => import("@Components/home/list/MostPopularPostCardList"),
  {
    suspense: true,
  }
);
const Home: NextPage = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <>
      <DefaultSeo {...rootSeo} />
      <IntroThumbnail />
      <RootBox>
        <section className="my-10">
          <CardNavTitle nav={<More href="popular" />}>
            {ALL_MOST_POPULAR_POST}
          </CardNavTitle>
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary onReset={reset} fallbackRender={ComponentLoadError}>
              <MostPopularPostCardList />
            </ErrorBoundary>
          </Suspense>
        </section>
        <section className="my-10">
          <CardNavTitle nav={<More href="latest" />}>
            {ALL_LATEST_POST}
          </CardNavTitle>
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary onReset={reset} fallbackRender={ComponentLoadError}>
              <LatestPostCardList />
            </ErrorBoundary>
          </Suspense>
        </section>
      </RootBox>
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    postQueryKeys.postListPopularDateScope("All"),
    () =>
      api.postService.getPosts({
        dateScope: "All",
        sortScope: "createdAt",
        page: 0,
        maxContent: 6,
      })
  );
  await queryClient.prefetchQuery(postQueryKeys.postListLatest(), () =>
    api.postService.getPosts({
      dateScope: "All",
      sortScope: "likes",
      page: 0,
      maxContent: 6,
    })
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
