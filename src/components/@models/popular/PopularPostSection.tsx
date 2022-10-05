import dynamic from "next/dynamic";

import FlameIcon from "@Commons/atom/icons/FlameIcon";
import CardTitle from "@Commons/molecules/title/CardTitle";

const PopularPostList = dynamic(
  () => import("@Models/popular/list/PopularPostList")
);

const PopularPostSection = () => {
  return (
    <section>
      <CardTitle
        cardTitle={<h6>TILog에서 가장 인기있는 포스트</h6>}
        Icon={<FlameIcon className="w-7 h-7" />}
      />
      <PopularPostList />
    </section>
  );
};
export default PopularPostSection;
