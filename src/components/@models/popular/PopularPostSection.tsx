import dynamic from "next/dynamic";

import Heading from "@Commons/atom/heading";
import FlameIcon from "@Commons/atom/icons/FlameIcon";
import CardTitle from "@Commons/molecules/title/CardTitle";

const PopularPostList = dynamic(
  () => import("@Models/popular/list/PopularPostList"),
  {
    suspense: true,
  }
);

const PopularPostSection = () => {
  return (
    <section>
      <CardTitle
        cardTitle={
          <Heading level={4} tw="font-semibold">
            TILog에서 가장 인기있는 포스트
          </Heading>
        }
        Icon={<FlameIcon className="w-7 h-7" />}
      />
      <PopularPostList />
    </section>
  );
};
export default PopularPostSection;
