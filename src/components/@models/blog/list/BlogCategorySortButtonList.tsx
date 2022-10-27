import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetCategories from "@Queries/categories/useGetCategories";
import isArrayEmpty from "@Utility/isArrayEmpty";

import { Category } from "@Api/interface/model";

const BlogCategorySortButtonList = ({
  category,
}: {
  category: Category["categoryName"];
}) => {
  const { data } = useGetCategories({ suspense: true, useErrorBoundary: true });
  if (!data) return null;
  if (isArrayEmpty(data.list)) return null;
  return <CategorySortButtonList category={category} categoryList={data} />;
};
export default withSuspenseAndErrorBoundary(BlogCategorySortButtonList);
