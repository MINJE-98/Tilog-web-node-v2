import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import useGetCategories from "@Queries/categories/useGetCategories";
import isArrayEmpty from "@Utility/isArrayEmpty";

const BlogCategorySortButtonList = () => {
  const { data } = useGetCategories({});
  if (!data) return null;
  if (isArrayEmpty(data.data.list)) return null;
  return <CategorySortButtonList categoryList={data.data} />;
};
export default BlogCategorySortButtonList;
