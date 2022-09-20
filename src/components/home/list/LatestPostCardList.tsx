import Spinner from "@Commons/atom/Spinner";
import PostCard from "@Commons/molecules/card/post/PostCard";
import More from "@Commons/molecules/link/More";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import PostCardList from "@Commons/organisms/list/PostCardList";
import { ALL_LATEST_POST } from "@Constants/text";
import useGetLatestPostList from "@Queries/posts/useGetLatestPostList";

const LatestPostCardList = () => {
  const latestPostList = useGetLatestPostList({
    dateScope: "All",
    sortScope: "createdAt",
    page: 0,
    maxContent: 6,
  });
  return (
    <section className="my-10">
      <CardNavTitle nav={<More href="latest" />}>
        {ALL_LATEST_POST}
      </CardNavTitle>
      {latestPostList.isLoading && <Spinner />}
      {latestPostList.isSuccess && (
        <PostCardList CardComponent={PostCard} postList={latestPostList.data} />
      )}
    </section>
  );
};

export default LatestPostCardList;
