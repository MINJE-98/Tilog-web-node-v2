import Spinner from "@Commons/atom/Spinner";
import MostPopularPostCard from "@Commons/molecules/card/post/MostPopularPostCard";
import More from "@Commons/molecules/link/More";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import PostCardList from "@Commons/organisms/list/PostCardList";
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
      <CardNavTitle nav={<More href="popular" />}>
        {ALL_MOST_POPULAR_POST}
      </CardNavTitle>
      {popularPostList.isLoading && <Spinner />}
      {popularPostList.isSuccess && (
        <PostCardList
          CardComponent={MostPopularPostCard}
          postList={popularPostList.data}
        />
      )}
    </section>
  );
};

export default MostPopularPostCardList;
