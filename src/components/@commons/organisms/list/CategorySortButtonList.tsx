import CategorySortButton from "@Commons/molecules/buttons/CategorySortButton";
import useGetUsersCategories from "@Queries/categories/useGetUsersCategories";

import { Users } from "@Api/interface/model";

const CategoryButtonList = ({ userId }: { userId: Users["id"] }) => {
  const categoryList = useGetUsersCategories(userId);
  if (!categoryList.data) return <>없어</>;
  return (
    <div className="flex flex-wrap gap-3">
      {categoryList.data.data.list.length === 0 && (
        <h2 className="text-base">카테고리가 존재하지 않아요.</h2>
      )}
      {categoryList.data.data.list.map((category) => (
        <CategorySortButton categoryName={category.categoryName} />
      ))}
    </div>
  );
};
export default CategoryButtonList;
