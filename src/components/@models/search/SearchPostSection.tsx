import dynamic from "next/dynamic";

import Heading from "@Commons/atom/heading";
import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";
import CardTitle from "@Commons/molecules/title/CardTitle";

import { Category } from "@Api/interface/model";

const SearchPostList = dynamic(
  () => import("@Models/search/list/SearchPostList"),
  {
    suspense: true,
  }
);

const SearchPostSection = ({
  category,
}: {
  category: Category["categoryName"];
}) => {
  return (
    <section>
      <CardTitle
        Icon={
          <div className="text-2xl">
            <RenderTechIcons categoryName={category} />
          </div>
        }
        cardTitle={
          <Heading level={4} tw="font-semibold">
            의 검색 결과
          </Heading>
        }
      />
      <SearchPostList categoryName={category} />
    </section>
  );
};
export default SearchPostSection;
