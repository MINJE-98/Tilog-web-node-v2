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
      <main className="col-span-2 ml-auto">
        <div className="grid gap-3 grid-row md:grid-cols-2 lg:grid-cols-3">
          <PostCardList
            CardComponent={MostPopularPostCard}
            postList={popularPostList.data}
          />
        </div>
      </main>
    </section>
  );
};

export default MostPopularPostCardList;
