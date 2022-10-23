import dynamic from "next/dynamic";

import Heading from "@Commons/atom/heading";
import FlameIcon from "@Commons/atom/icons/FlameIcon";
import LinkTo from "@Commons/atom/LinkTo";
import CardTitle from "@Commons/molecules/title/CardTitle";

const MostPopularSwiper = dynamic(
  () => import("@Models/home/list/MostPopularSwiper"),
  {
    suspense: true,
  }
);

const MostPopularPostSection = () => {
  return (
    <section>
      <CardTitle
        Icon={<FlameIcon className="w-7 h-7" />}
        cardTitle={
          <LinkTo scroll={false} href="/popular">
            <Heading level={4} tw="font-semibold">
              TILog에서 가장 인기있는 포스트 {">"}
            </Heading>
          </LinkTo>
        }
      />
      <MostPopularSwiper />
    </section>
  );
};

export default MostPopularPostSection;
