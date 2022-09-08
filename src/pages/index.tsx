import type { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";

import CardTitle from "@Commons/atom/CardTitle";
import DateScopeLink from "@Commons/molecules/link/DateScopeLink";
import Header from "@Commons/organisms/header";
import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import MostPopularPostCardList from "@Commons/organisms/list/MostPopularPostCardList";
import PostCardList from "@Commons/organisms/list/PostCardList";
import IntroThumbnail from "@Components/home/IntroThumbnail";
import {
  ALL_LATEST_POST,
  ALL_MOST_POPULAR_POST,
  CATEGORY_LATEST_POST,
  CATEGORY_MOST_POPULAR_POST,
} from "@Constants/text";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import useGetStringTypeToRouter from "@Hooks/useGetStringTypeToRouter";
import RootBox from "@Layouts/box/RootBox";
import { homeSeo } from "@SEO";

const Home: NextPage = () => {
  const categoryName = useGetStringTypeToRouter("category");

  return (
    <div>
      <DefaultSeo {...homeSeo} />
      <Header />
      <IntroThumbnail />
      <CategorySortButtonList />
      <RootBox>
        <div className="my-10">
          <CardTitle
            title={
              !categoryName
                ? ALL_MOST_POPULAR_POST
                : categoryName + CATEGORY_MOST_POPULAR_POST
            }
          >
            <div>
              <DateScopeLink dateScope="Daily" />
              <DateScopeLink dateScope="Weekly" />
              <DateScopeLink dateScope="Monthly" />
            </div>
          </CardTitle>
          <MostPopularPostCardList
            sortScope="likes"
            page={0}
            maxContent={6}
            categoryName={categoryName}
          />
        </div>
        <div className="my-10">
          <CardTitle
            title={
              !categoryName
                ? ALL_LATEST_POST
                : categoryName + CATEGORY_LATEST_POST
            }
          />
          <div className="col-span-2 ml-auto">
            <PostCardList
              dateScope="All"
              sortScope="createdAt"
              page={0}
              maxContent={16}
              categoryName={categoryName}
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
