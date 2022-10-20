import type { GetStaticProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import RootBox from "@Layouts/box/RootBox";
import IntroThumbnail from "@Models/home/IntroThumbnail";
import LatestPostSection from "@Models/home/LatestPostSection";
import MostPopularPostSection from "@Models/home/MostPopularPostSection";
import { rootSeo } from "@SEO";
import { postQueryKeys } from "@Utility/queryKey";

const Home: NextPage = () => {
  return (
    <>
      <DefaultSeo {...rootSeo} />
      <IntroThumbnail />
      <RootBox>
        <MostPopularPostSection />
        <LatestPostSection />
      </RootBox>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  Promise.all([
    await queryClient.prefetchQuery(
      postQueryKeys.postListPopularDateScope("All"),
      () =>
        api.postService.getPosts({
          dateScope: "All",
          sortScope: "likes",
          page: 0,
          maxContent: 6,
        })
    ),
    await queryClient.prefetchInfiniteQuery(
      postQueryKeys.postListInfinitePopularDateScope("All"),
      () =>
        api.postService.getPosts({
          dateScope: "All",
          sortScope: "createdAt",
          page: 0,
          maxContent: 6,
        })
    ),
  ]);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 30,
  };
};
