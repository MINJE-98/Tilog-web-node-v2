import CategorySortButton from "@Commons/molecules/buttons/CategorySortButton";
import useGetAllCategories from "@Queries/categories/useGetAllCategories";

const CategoryButtonList = () => {
  const categoryList = useGetAllCategories();
  if (!categoryList.data)
    return <h2 className="text-base">카테고리가 존재하지 않아요.</h2>;

  return (
    <div className="flex flex-wrap gap-3 ">
      {categoryList.data.data.list.map((category) => (
        <CategorySortButton
          key={category.id}
          categoryName={category.categoryName}
        />
      ))}
    </div>
  );
};
export default CategoryButtonList;
