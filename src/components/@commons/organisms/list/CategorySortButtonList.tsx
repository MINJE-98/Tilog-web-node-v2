import CategoryButton from "@Commons/molecules/buttons/category/CategoryButton";
import SelectedCategoryButton from "@Commons/molecules/buttons/category/SelectedCategoryButton";
import useStringRouter from "@Hooks/useStringRouter";

import { GetCategoriesResponseDto } from "@til-log.lab/tilog-api";

interface CategorySortButtonListProps {
  categoryList: GetCategoriesResponseDto;
}

const CategorySortButtonList = ({
  categoryList,
}: CategorySortButtonListProps) => {
  const category = useStringRouter("category");
  return (
    <div className="flex flex-wrap gap-3">
      {categoryList.list.map(({ id, categoryName }) =>
        category === categoryName ? (
          <SelectedCategoryButton key={id} categoryName={categoryName} />
        ) : (
          <CategoryButton key={id} categoryName={categoryName} />
        )
      )}
    </div>
  );
};
export default CategorySortButtonList;
