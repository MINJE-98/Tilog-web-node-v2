import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { searchSeo } from "library/seo/searchSeo";
import { DefaultSeo } from "next-seo";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import Spinner from "@Commons/atom/Spinner";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import RootBox from "@Layouts/box/RootBox";

const SearchPostList = dynamic(
  () => import("@Components/post/list/SearchPostList"),
  { ssr: false }
);

const SearchPage: NextPage<{ categoryName: string }> = ({
  categoryName,
}: {
  categoryName: string;
}) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <div>
      <DefaultSeo {...searchSeo(categoryName)} />
      <RootBox>
        <CardNavTitle>{categoryName} Search Result</CardNavTitle>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary onReset={reset} fallbackRender={ComponentLoadError}>
            <SearchPostList categoryName={categoryName} />
          </ErrorBoundary>
        </Suspense>
      </RootBox>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categoryName } = context.query;
  if (!categoryName) return { props: {} };
  if (Array.isArray(categoryName)) return { props: {} };
  return {
    props: {
      categoryName,
    },
  };
};

export default SearchPage;
