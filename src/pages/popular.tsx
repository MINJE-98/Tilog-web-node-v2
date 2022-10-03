import { GetServerSideProps, NextPage } from "next";

import { popularSeo } from "library/seo/popularSeo";
import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import RootBox from "@Layouts/box/RootBox";
import PopularPostSection from "@Models/popular/PopularPostSection";
import { postQueryKeys } from "@Utility/queryKey";

import { DateScope, dateScopeUnion } from "@Api/post/interface/dateScope";

const PopularPage: NextPage = () => {
  return (
    <div>
      <DefaultSeo {...popularSeo} />
      <RootBox>
        <PopularPostSection />
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
