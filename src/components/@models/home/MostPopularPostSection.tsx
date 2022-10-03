import FlameIcon from "@Commons/atom/icons/FlameIcon";
import LinkTo from "@Commons/atom/LinkTo";
import CardTitle from "@Commons/molecules/title/CardTitle";
import MostPopularSwiper from "@Models/home/list/MostPopularSwiper";

const MostPopularPostSection = () => {
  return (
    <section>
      <CardTitle
        Icon={<FlameIcon className="w-7 h-7" />}
        cardTitle={
          <LinkTo scroll={false} href="/popular">
            <h6>TILog에서 가장 인기있는 포스트 {">"}</h6>
          </LinkTo>
        }
      />
      <MostPopularSwiper />
    </section>
  );
};

export default MostPopularPostSection;
