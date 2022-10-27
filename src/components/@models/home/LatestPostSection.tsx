import dynamic from "next/dynamic";

import NewIcon from "@Commons/atom/icons/NewIcon";
import Paragraph from "@Commons/atom/paragraph";
import CardTitle from "@Commons/molecules/title/CardTitle";

const LatestPostList = dynamic(
  () => import("@Models/home/list/LatestPostList"),
  {
    ssr: false,
  }
);

const LatestPostSection = () => {
  return (
    <section className="my-10">
      <CardTitle
        Icon={<NewIcon />}
        cardTitle={
          <Paragraph color="black" fontSize="large">
            TILog의 최신 포스트
          </Paragraph>
        }
      />
      <LatestPostList />
    </section>
  );
};
export default LatestPostSection;
