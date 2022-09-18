import type { NextPage } from "next";

import { DefaultSeo } from "next-seo";

import IntroThumbnail from "@Components/home/IntroThumbnail";
import PostSection from "@Components/home/PostSection";
import RootBox from "@Layouts/box/RootBox";
import { rootSeo } from "@SEO";

const Home: NextPage = () => {
  return (
    <>
      <DefaultSeo {...rootSeo} />
      <IntroThumbnail />
      <RootBox>
        <PostSection />
      </RootBox>
    </>
  );
};
export default Home;
