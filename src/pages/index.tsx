import type { NextPage } from "next";

import { DefaultSeo } from "next-seo";

import RootBox from "@Layouts/box/RootBox";
import IntroThumbnail from "@Models/home/IntroThumbnail";
import LatestPostSection from "@Models/home/LatestPostSection";
import MostPopularPostSection from "@Models/home/MostPopularPostSection";
import { rootSeo } from "@SEO";

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
