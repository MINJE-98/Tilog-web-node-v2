import { GetServerSideProps, NextPage } from "next";

import { popularSeo } from "library/seo/popularSeo";
import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import DateScopeLink from "@Commons/molecules/link/DateScopeLink";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import PopularPostList from "@Components/post/list/PopularPostList";
import { ALL_MOST_POPULAR_POST } from "@Constants/text";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import { postQueryKeys } from "@Utility/queryKey";

import DateScope from "@Api/post/interface/dateScope";

const PopularPage: NextPage = () => {
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
        <PopularPostList />
      </RootBox>
    </div>
  );
};

export default PopularPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async (context) => {
    const { dateScope } = context.query;
    if (!dateScope) return { props: {} };
    if (Array.isArray(dateScope)) return { props: {} };

    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery(
      postQueryKeys.postListInfinitePopularDateScope(dateScope as DateScope),
      () =>
        api.postService.getPosts({
          dateScope: dateScope as DateScope,
          sortScope: "likes",
          page: 0,
          maxContent: 10,
        })
    );
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  }
);
