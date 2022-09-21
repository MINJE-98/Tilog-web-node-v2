import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { latestSeo } from "library/seo/latestSeo";
import { DefaultSeo } from "next-seo";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import Spinner from "@Commons/atom/Spinner";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import { ALL_LATEST_POST } from "@Constants/text";
import RootBox from "@Layouts/box/RootBox";

const LatestPostCardList = dynamic(
  () => import("@Components/post/list/LatestPostList"),
  { ssr: false }
);

const LatestPage: NextPage = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div>
      <DefaultSeo {...latestSeo} />
      <RootBox>
        <CardNavTitle>{ALL_LATEST_POST}</CardNavTitle>

        <Suspense fallback={<Spinner />}>
          <ErrorBoundary onReset={reset} fallbackRender={ComponentLoadError}>
            <LatestPostCardList />
          </ErrorBoundary>
        </Suspense>
      </RootBox>
    </div>
  );
};

export default LatestPage;
