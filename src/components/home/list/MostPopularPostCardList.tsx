import CardTitle from "@Commons/atom/CardTitle";
import MostPopularPostCard from "@Commons/molecules/card/post/MostPopularPostCard";
import PostCardList from "@Commons/organisms/list/PostCardList";
import More from "@Components/home/link/More";
import { ALL_MOST_POPULAR_POST } from "@Constants/text";
import useGetMostPopularPostList from "@Queries/posts/useGetMostPopularPostList";

const MostPopularPostCardList = () => {
  const popularPostList = useGetMostPopularPostList({
    dateScope: "All",
    sortScope: "likes",
    page: 0,
    maxContent: 6,
  });
  return (
    <section className="my-10">
      <CardTitle nav={<More href="popular" />}>
        {ALL_MOST_POPULAR_POST}
      </CardTitle>
      <main>
        <PostCardList
          CardComponent={MostPopularPostCard}
          postList={popularPostList.data}
        />
      </main>
    </section>
  );
};

export default MostPopularPostCardList;
