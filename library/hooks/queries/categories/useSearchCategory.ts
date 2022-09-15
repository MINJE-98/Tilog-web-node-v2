import useGetAllCategories from "@Queries/categories/useGetAllCategories";

import {
  GetCategoriesItem,
  GetUserCategoriesItem,
} from "@til-log.lab/tilog-api";

const useSearchCategory = () => {
  const { data } = useGetAllCategories();

  return (
    categoryName?: GetUserCategoriesItem["categoryName"],
    categoryId?: GetUserCategoriesItem["id"]
  ): GetCategoriesItem[] | null => {
    if (!data) return null;
    const categoryList = data.data.list;

    if (categoryName) {
      return categoryList.filter((v) => v.categoryName.includes(categoryName));
    }

    if (categoryId) {
      return categoryList.filter((v) => {
        return v.id === categoryId;
      });
    }

    return categoryList;
  };
};

export default useSearchCategory;
