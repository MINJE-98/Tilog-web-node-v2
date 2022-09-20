import Spinner from "@Commons/atom/Spinner";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import useGetCategories from "@Queries/categories/useGetCategories";
import isArrayEmpty from "@Utility/isArrayEmpty";

const BlogCategorySortButtonList = () => {
  const { data, isLoading, isSuccess } = useGetCategories();
  if (isLoading) return <Spinner />;
  if (!data) return null;
  if (isArrayEmpty(data.data.list)) return null;
  return (
    <section>
      <CardNavTitle>Categories</CardNavTitle>
      {isSuccess && <CategorySortButtonList categoryList={data.data} />}
    </section>
  );
};
export default BlogCategorySortButtonList;
