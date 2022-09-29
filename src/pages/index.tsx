import type { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import FlameIcon from "@Commons/atom/icons/FlameIcon";
import NewIcon from "@Commons/atom/icons/NewIcon";
import CardLinkTitle from "@Commons/molecules/title/CardLinkTitle";
import IntroThumbnail from "@Components/home/IntroThumbnail";
import MostPopularSwiper from "@Components/home/list/MostPopularSwiper";
import LatestPostList from "@Components/post/list/LatestPostList";
import RootBox from "@Layouts/box/RootBox";
import { rootSeo } from "@SEO";
import { postQueryKeys } from "@Utility/queryKey";

const Home: NextPage = () => {
  return (
    <div>
      <DefaultSeo {...rootSeo} />
      <IntroThumbnail />
      <RootBox>
        <section>
          <CardLinkTitle
            href="/popular"
            Icon={<FlameIcon className="w-7 h-7" />}
            title="TILog에서 가장 인기있는 포스트 >"
          />
          <div className="flex justify-center">
            <MostPopularSwiper />
          </div>
        </section>
        <section className="my-10">
          <CardLinkTitle
            Icon={<NewIcon />}
            href="#"
            title="TILog의 최신 포스트 >"
          />
          <LatestPostList />
        </section>
      </RootBox>
    </div>
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
        sortScope: "likes",
        page: 0,
        maxContent: 6,
      })
  );
  await queryClient.prefetchInfiniteQuery(
    postQueryKeys.postListInfinitePopularDateScope("All"),
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
};
