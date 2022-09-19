import { useFormContext } from "react-hook-form";

import useSearchCategory from "@Queries/categories/useSearchCategory";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const useSearchCategoryId = () => {
  const { getValues } = useFormContext<WriterFormTypes>();
  const searchCategory = useSearchCategory();

  return searchCategory(undefined, getValues("categoryId"));
};

export default useSearchCategoryId;
