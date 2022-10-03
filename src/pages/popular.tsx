import { GetServerSideProps, NextPage } from "next";

import { popularSeo } from "library/seo/popularSeo";
import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import FlameIcon from "@Commons/atom/icons/FlameIcon";
import CardTitle from "@Commons/molecules/title/CardTitle";
import RootBox from "@Layouts/box/RootBox";
import PopularPostList from "@Models/post/list/PopularPostList";
import { postQueryKeys } from "@Utility/queryKey";

import { DateScope, dateScopeUnion } from "@Api/post/interface/dateScope";

const PopularPage: NextPage = () => {
  return (
    <div>
      <DefaultSeo {...popularSeo} />
      <RootBox>
        <CardTitle
          cardTitle={<h6>TILog에서 가장 인기있는 포스트</h6>}
          Icon={<FlameIcon className="w-7 h-7" />}
        />
        <PopularPostList />
      </RootBox>
    </div>
  );
};

export default PopularPage;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dateScope } = context.query;
  if (!dateScope)
    return {
      redirect: {
        permanent: false,
        destination: "/popular/?dateScope=All",
      },
    };
  if (Array.isArray(dateScope)) return { props: {} };

  if (!(dateScope in dateScopeUnion)) {
    return {
      redirect: {
        permanent: false,
        destination: "/popular/?dateScope=All",
      },
    };
  }

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
};
