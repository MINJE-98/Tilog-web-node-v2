import dynamic from "next/dynamic";

import FlameIcon from "@Commons/atom/icons/FlameIcon";
import LinkTo from "@Commons/atom/LinkTo";
import Paragraph from "@Commons/atom/paragraph";
import CardTitle from "@Commons/molecules/title/CardTitle";

const MostPopularSwiper = dynamic(
  () => import("@Models/home/list/MostPopularSwiper"),
  {
    ssr: false,
  }
);

const MostPopularPostSection = () => {
  return (
    <section>
      <CardTitle
        Icon={<FlameIcon className="w-7 h-7" />}
        cardTitle={
          <LinkTo scroll={false} href="/popular">
            <Paragraph color="gray" fontSize="large">
              TILog에서 가장 인기있는 포스트 {">"}
            </Paragraph>
          </LinkTo>
        }
      />
      <MostPopularSwiper />
    </section>
  );
};

export default MostPopularPostSection;
