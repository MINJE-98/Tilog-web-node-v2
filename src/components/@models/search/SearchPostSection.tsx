import dynamic from "next/dynamic";

import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";
import CardTitle from "@Commons/molecules/title/CardTitle";

import { Category } from "@Api/interface/model";

const SearchPostList = dynamic(
  () => import("@Models/search/list/SearchPostList")
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
        cardTitle={<h6>의 검색 결과</h6>}
      />
      <SearchPostList categoryName={category} />
    </section>
  );
};
export default SearchPostSection;
