import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import useGetAllCategories from "@Queries/categories/useGetAllCategories";
import isArrayEmpty from "@Utility/isArrayEmpty";

const BlogCategorySortButtonList = () => {
  const { data } = useGetAllCategories();
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
