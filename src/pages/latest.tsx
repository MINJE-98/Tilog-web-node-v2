import { GetServerSideProps, NextPage } from "next";

import CardTitle from "@Commons/atom/CardTitle";
import PostCard from "@Commons/molecules/card/post/PostCard";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import { ALL_LATEST_POST } from "@Constants/text";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import useGetMostPopularPostInfiniteList from "@Queries/posts/useGetMostPopularPostInfiniteList";

const LatestPage: NextPage = () => {
  const latestPostList = useGetMostPopularPostInfiniteList({
    dateScope: "All",
    sortScope: "likes",
    page: 0,
    maxContent: 10,
  });
  return (
    <div>
      <RootBox>
        <div className="inline">
          <CardTitle>{ALL_LATEST_POST}</CardTitle>
        </div>
        <PostCardInfiniteList
          CardComponent={PostCard}
          postList={latestPostList}
        />
      </RootBox>
    </div>
  );
};

export default LatestPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps();
