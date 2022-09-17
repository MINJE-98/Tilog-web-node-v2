import { GetServerSideProps, NextPage } from "next";

import CardTitle from "@Commons/atom/CardTitle";
import PostCard from "@Commons/molecules/card/post/PostCard";
import DateScopeLink from "@Commons/molecules/link/DateScopeLink";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import { ALL_MOST_POPULAR_POST } from "@Constants/text";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import useDateScopeRouter from "@Hooks/useDateScopeRouter";
import RootBox from "@Layouts/box/RootBox";
import useGetMostPopularPostInfiniteList from "@Queries/posts/useGetMostPopularPostInfiniteList";

const PopularPage: NextPage = () => {
  const dateScope = useDateScopeRouter();
  const popularPostList = useGetMostPopularPostInfiniteList({
    dateScope,
    sortScope: "likes",
    page: 0,
    maxContent: 10,
  });

  return (
    <div>
      <RootBox>
        <div>
          <CardTitle
            nav={
              <div>
                <DateScopeLink dateScope="All" />
                <DateScopeLink dateScope="Daily" />
                <DateScopeLink dateScope="Weekly" />
                <DateScopeLink dateScope="Monthly" />
              </div>
            }
          >
            {ALL_MOST_POPULAR_POST}
          </CardTitle>
        </div>
        <PostCardInfiniteList
          twoRow
          CardComponent={PostCard}
          postList={popularPostList}
        />
      </RootBox>
    </div>
  );
};

export default PopularPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps();
