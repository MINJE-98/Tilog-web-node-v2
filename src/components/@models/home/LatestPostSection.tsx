import dynamic from "next/dynamic";

import Heading from "@Commons/atom/heading";
import NewIcon from "@Commons/atom/icons/NewIcon";
import CardTitle from "@Commons/molecules/title/CardTitle";

const LatestPostList = dynamic(
  () => import("@Models/home/list/LatestPostList"),
  {
    suspense: true,
  }
);

const LatestPostSection = () => {
  return (
    <section className="my-10">
      <CardTitle
        Icon={<NewIcon />}
        cardTitle={
          <Heading level={4} tw="font-semibold">
            TILog의 최신 포스트
          </Heading>
        }
      />
      <LatestPostList />
    </section>
  );
};
export default LatestPostSection;
