import { GetStaticProps, NextPage } from "next";

import { popularSeo } from "library/seo/popularSeo";
import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import RootBox from "@Layouts/box/RootBox";
import PopularPostSection from "@Models/popular/PopularPostSection";
import { postQueryKeys } from "@Utility/queryKey";

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
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    postQueryKeys.postListInfinitePopularDateScope("All"),
    () =>
      api.postService.getPosts({
        dateScope: "All",
        sortScope: "likes",
        page: 0,
        maxContent: 10,
      })
  );
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 6000,
  };
};
