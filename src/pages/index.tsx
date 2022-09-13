import type { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";

import CardTitle from "@Commons/atom/CardTitle";
import LinkTo from "@Commons/atom/LinkTo";
import Header from "@Commons/organisms/header";
import MostPopularPostCardList from "@Commons/organisms/list/MostPopularPostCardList";
import PostCardList from "@Commons/organisms/list/PostCardList";
import IntroThumbnail from "@Components/home/IntroThumbnail";
import { ALL_LATEST_POST, ALL_MOST_POPULAR_POST } from "@Constants/text";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import { rootSeo } from "@Library/seo";

const Home: NextPage = () => {
  return (
    <div>
      <DefaultSeo {...rootSeo} />
      <Header />
      <IntroThumbnail />
      <RootBox>
        <div className="my-10">
          <CardTitle title={ALL_MOST_POPULAR_POST}>
            <LinkTo href="/popular">
              <p className="hover:text-neutral-800 dark:hover:text-neutral-50">
                더보기
              </p>
            </LinkTo>
          </CardTitle>
          <MostPopularPostCardList sortScope="likes" page={0} maxContent={6} />
        </div>
        <div className="my-10">
          <CardTitle title={ALL_LATEST_POST}>
            <LinkTo href="/latest">
              <p className="hover:text-neutral-800 dark:hover:text-neutral-50">
                더보기
              </p>
            </LinkTo>
          </CardTitle>
          <div className="col-span-2 ml-auto">
            <PostCardList
              dateScope="All"
              sortScope="createdAt"
              page={0}
              maxContent={10}
              row="2"
            />
          </div>
        </div>
      </RootBox>
    </div>
  );
};
export default Home;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps();
