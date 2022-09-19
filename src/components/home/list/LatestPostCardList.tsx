import PostCard from "@Commons/molecules/card/post/PostCard";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import PostCardList from "@Commons/organisms/list/PostCardList";
import More from "@Components/home/link/More";
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
      <main>
        <PostCardList CardComponent={PostCard} postList={latestPostList.data} />
      </main>
    </section>
  );
};

export default LatestPostCardList;
