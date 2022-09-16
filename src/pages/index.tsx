import type { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";

import IntroThumbnail from "@Components/home/IntroThumbnail";
import PostSection from "@Components/home/PostSection";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import { rootSeo } from "@Library/seo";

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
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps();
