import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetCategories from "@Queries/categories/useGetCategories";
import isArrayEmpty from "@Utility/isArrayEmpty";

const BlogCategorySortButtonList = () => {
  const { data } = useGetCategories({});
  if (!data) return null;
  if (isArrayEmpty(data.list)) return null;
  return <CategorySortButtonList categoryList={data} />;
};
export default withSuspenseAndErrorBoundary(BlogCategorySortButtonList);
