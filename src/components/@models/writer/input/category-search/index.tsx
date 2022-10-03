import { useFormContext } from "react-hook-form";

import { WRITER_INPUT_TYPE } from "@Constants/input";
import SelectedCategory from "@Models/writer/button/SelectedCategory";
import CategoryInput from "@Models/writer/input/category-search/CategoryInput";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const SearchCategory = () => {
  const { watch } = useFormContext<WriterFormTypes>();

  if (!watch(WRITER_INPUT_TYPE.CATEGORY)) return <CategoryInput />;
  return <SelectedCategory />;
};
export default SearchCategory;
