import type { NextPage } from "next";

import RootBox from "@Commons/atom/box/RootBox";
import CardTitle from "@Commons/atom/CardTitle";
import DateScopeLink from "@Commons/molecules/link/DateScopeLink";
import Header from "@Commons/organisms/header";
import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import MostPopularPostCardList from "@Commons/organisms/list/MostPopularPostCardList";
import PostCardList from "@Commons/organisms/list/PostCardList";
import IntroThumbnail from "@Components/home/IntroThumbnail";
import {
  CATEGORY_MOST_POPULAR_POSTCARD,
  LATEST_CATEGORY_POSTCARD,
  LATEST_POSTCARD,
  MOST_POPULAR_POSTCARD,
} from "@Constants/post";
import useGetStringTypeToRouter from "@Hooks/useGetStringTypeToRouter";

const Home: NextPage = () => {
  const categoryName = useGetStringTypeToRouter("category");

  return (
    <div>
      <Header />
      <IntroThumbnail />
      <CategorySortButtonList />
      <RootBox>
        <div className="my-10">
          <CardTitle
            title={
              !categoryName
                ? MOST_POPULAR_POSTCARD.ko
                : categoryName + CATEGORY_MOST_POPULAR_POSTCARD.ko
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
                ? LATEST_POSTCARD.ko
                : categoryName + LATEST_CATEGORY_POSTCARD.ko
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
