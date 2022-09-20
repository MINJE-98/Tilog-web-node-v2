import { ChangeEvent, useState } from "react";

import useGetCategories from "@Queries/categories/useGetCategories";

const useSearchCategoryName = () => {
  const [categoryName, setCategoryName] = useState("");
  const searchCategory = useGetCategories(categoryName);

  const handleChangeCategoryName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(value);
  };

  return {
    searchCategory,
    handleChangeCategoryName,
  };
};

export default useSearchCategoryName;
