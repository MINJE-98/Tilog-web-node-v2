import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import useGetCategories from "@Queries/categories/useGetCategories";
import isArrayEmpty from "@Utility/isArrayEmpty";

const BlogCategorySortButtonList = () => {
  const { data } = useGetCategories();
  if (!data) return null;
  if (isArrayEmpty(data.data.list)) return null;
  return (
    <section>
      <CardNavTitle>Categories</CardNavTitle>
      <CategorySortButtonList categoryList={data.data} />
    </section>
  );
};
export default BlogCategorySortButtonList;
