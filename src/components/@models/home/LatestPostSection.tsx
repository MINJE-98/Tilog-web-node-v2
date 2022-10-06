import dynamic from "next/dynamic";

import NewIcon from "@Commons/atom/icons/NewIcon";
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
      <CardTitle Icon={<NewIcon />} cardTitle={<h6>TILog의 최신 포스트</h6>} />
      <LatestPostList />
    </section>
  );
};
export default LatestPostSection;
