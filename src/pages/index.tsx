import type { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import FlameIcon from "@Commons/atom/icons/FlameIcon";
import NewIcon from "@Commons/atom/icons/NewIcon";
import LinkTo from "@Commons/atom/LinkTo";
import CardTitle from "@Commons/molecules/title/CardTitle";
import RootBox from "@Layouts/box/RootBox";
import IntroThumbnail from "@Models/home/IntroThumbnail";
import MostPopularSwiper from "@Models/home/list/MostPopularSwiper";
import LatestPostList from "@Models/post/list/LatestPostList";
import { rootSeo } from "@SEO";
import { postQueryKeys } from "@Utility/queryKey";

const Home: NextPage = () => {
  return (
    <div>
      <DefaultSeo {...rootSeo} />
      <IntroThumbnail />
      <RootBox>
        <section>
          <CardTitle
            cardTitle={
              <LinkTo scroll={false} href="/popular">
                <h6>TILog에서 가장 인기있는 포스트 {">"}</h6>
              </LinkTo>
            }
            Icon={<FlameIcon className="w-7 h-7" />}
          />
          <div className="flex justify-center">
            <MostPopularSwiper />
          </div>
        </section>
        <section className="my-10">
          <CardTitle
            Icon={<NewIcon />}
            cardTitle={<h6>TILog의 최신 포스트</h6>}
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
