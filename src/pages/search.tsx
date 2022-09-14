import { GetServerSideProps, NextPage } from "next";

import CardTitle from "@Commons/atom/CardTitle";
import Header from "@Commons/organisms/header";
import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import PostCardList from "@Commons/organisms/list/PostCardList";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import useCategoryRouter from "@Hooks/useCategoryRouter";
import RootBox from "@Layouts/box/RootBox";

const LatestPage: NextPage = () => {
  const category = useCategoryRouter();
  return (
    <div>
      <Header />
      <CategorySortButtonList />
      <RootBox>
        <div className="inline">
          <CardTitle title={category} />
        </div>
        <PostCardList
          dateScope="All"
          sortScope="createdAt"
          categoryName={category}
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
