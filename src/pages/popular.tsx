import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { popularSeo } from "library/seo/popularSeo";
import { DefaultSeo } from "next-seo";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import Spinner from "@Commons/atom/Spinner";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";
import DateScopeLink from "@Commons/molecules/link/DateScopeLink";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import { ALL_MOST_POPULAR_POST } from "@Constants/text";
import RootBox from "@Layouts/box/RootBox";

const PopularPostList = dynamic(
  () => import("@Components/post/list/PopularPostList"),
  { ssr: false }
);

const PopularPage: NextPage = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div>
      <DefaultSeo {...popularSeo} />
      <RootBox>
        <CardNavTitle
          nav={
            <div>
              <DateScopeLink dateScope="All" />
              <DateScopeLink dateScope="Daily" />
              <DateScopeLink dateScope="Weekly" />
              <DateScopeLink dateScope="Monthly" />
            </div>
          }
        >
          {ALL_MOST_POPULAR_POST}
        </CardNavTitle>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary onReset={reset} fallbackRender={ComponentLoadError}>
            <PopularPostList />
          </ErrorBoundary>
        </Suspense>
      </RootBox>
    </div>
  );
};

export default PopularPage;
