import { GetServerSideProps, NextPage } from "next";

import CardTitle from "@Commons/atom/CardTitle";
import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import useStringRouter from "@Hooks/useStringRouter";
import RootBox from "@Layouts/box/RootBox";
import useGetSearchPostInfiniteList from "@Queries/posts/useGetSearchPostInfiniteList";

const SearchPage: NextPage = () => {
  const category = useStringRouter("category");
  const searchPostList = useGetSearchPostInfiniteList({
    dateScope: "All",
    sortScope: "createdAt",
    page: 0,
    categoryName: category,
    maxContent: 10,
  });
  return (
    <div>
      <RootBox>
        <div className="inline">
          <CardTitle title={category} />
        </div>
        <PostCardInfiniteList
          CardComponent={PostCard}
          postList={searchPostList}
        />
      </RootBox>
    </div>
  );
};

export default SearchPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps();
