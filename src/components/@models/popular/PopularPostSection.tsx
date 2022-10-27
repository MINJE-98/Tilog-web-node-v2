import dynamic from "next/dynamic";

import FlameIcon from "@Commons/atom/icons/FlameIcon";
import Paragraph from "@Commons/atom/paragraph";
import CardTitle from "@Commons/molecules/title/CardTitle";

const PopularPostList = dynamic(
  () => import("@Models/popular/list/PopularPostList"),
  {
    ssr: false,
  }
);

const PopularPostSection = () => {
  return (
    <section>
      <CardTitle
        cardTitle={
          <Paragraph color="black" fontSize="large">
            TILog에서 가장 인기있는 포스트
          </Paragraph>
        }
        Icon={<FlameIcon className="w-7 h-7" />}
      />
      <PopularPostList />
    </section>
  );
};
export default PopularPostSection;
