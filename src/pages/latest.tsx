import { GetServerSideProps, NextPage } from "next";

import { latestSeo } from "library/seo/latestSeo";
import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import LatestPostList from "@Components/post/list/LatestPostList";
import { ALL_LATEST_POST } from "@Constants/text";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import { postQueryKeys } from "@Utility/queryKey";

const LatestPage: NextPage = () => {
  return (
    <div>
      <DefaultSeo {...latestSeo} />
      <RootBox>
        <CardNavTitle>{ALL_LATEST_POST}</CardNavTitle>
        <LatestPostList />
      </RootBox>
    </div>
  );
};

export default LatestPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery(
      postQueryKeys.postListLatest(),
      () =>
        api.postService.getPosts({
          dateScope: "All",
          sortScope: "createdAt",
          page: 0,
          maxContent: 6,
        })
    );
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  }
);
