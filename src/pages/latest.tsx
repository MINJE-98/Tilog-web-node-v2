import { GetServerSideProps, NextPage } from "next";

import CardTitle from "@Commons/atom/CardTitle";
import Header from "@Commons/organisms/header";
import PostCardList from "@Commons/organisms/list/PostCardList";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";

const LatestPage: NextPage = () => {
  return (
    <div>
      <Header />
      <RootBox>
        <div className="inline">
          <CardTitle title="최신 게시글" />
        </div>
        <PostCardList
          dateScope="All"
          sortScope="createdAt"
          page={0}
          maxContent={10}
          row="2"
          isViewType="infinite"
        />
      </RootBox>
    </div>
  );
};

export default LatestPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps();
