import { useFormContext } from "react-hook-form";

import SelectedCategory from "@Components/writer/button/SelectedCategory";
import CategoryInput from "@Components/writer/input/category-search/CategoryInput";
import { CATEGORY_ID } from "@Constants/writer";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

const SearchCategory = () => {
  const { watch } = useFormContext<WriterFormTypes>();

  if (!watch(CATEGORY_ID)) return <CategoryInput />;
  return <SelectedCategory />;
};
export default SearchCategory;
