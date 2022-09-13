import { GetServerSideProps, NextPage } from "next";

import CardTitle from "@Commons/atom/CardTitle";
import DateScopeLink from "@Commons/molecules/link/DateScopeLink";
import Header from "@Commons/organisms/header";
import PostCardList from "@Commons/organisms/list/PostCardList";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import useDateScopeRouter from "@Hooks/useDateScopeRouter";
import RootBox from "@Layouts/box/RootBox";

const PopularPage: NextPage = () => {
  const dateScope = useDateScopeRouter();
  return (
    <div>
      <Header />
      <RootBox>
        <div>
          <CardTitle title="인기 게시글">
            <div>
              <DateScopeLink dateScope="All" />
              <DateScopeLink dateScope="Daily" />
              <DateScopeLink dateScope="Weekly" />
              <DateScopeLink dateScope="Monthly" />
            </div>
          </CardTitle>
        </div>
        <PostCardList
          dateScope={dateScope}
          sortScope="likes"
          page={0}
          maxContent={10}
          row="2"
          isViewType="infinite"
        />
      </RootBox>
    </div>
  );
};

export default PopularPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps();
