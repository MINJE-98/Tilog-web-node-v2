import LatestPostCardList from "@Components/home/list/LatestPostCardList";
import MostPopularPostCardList from "@Components/home/list/MostPopularPostCardList";

const PostSection = () => {
  return (
    <>
      <MostPopularPostCardList />
      <LatestPostCardList />
    </>
  );
};

export default PostSection;
