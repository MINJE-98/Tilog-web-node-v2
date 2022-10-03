import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";
import CardTitle from "@Commons/molecules/title/CardTitle";
import SearchPostList from "@Models/search/list/SearchPostList";

import { Category } from "@Api/interface/model";

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
