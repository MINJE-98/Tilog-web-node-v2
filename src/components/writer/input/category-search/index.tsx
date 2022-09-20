import { useFormContext } from "react-hook-form";

import SelectedCategory from "@Components/writer/button/SelectedCategory";
import CategoryInput from "@Components/writer/input/category-search/CategoryInput";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const SearchCategory = () => {
  const { watch } = useFormContext<WriterFormTypes>();

  if (!watch(WRITER_INPUT_TYPE.CATEGORY)) return <CategoryInput />;
  return <SelectedCategory />;
};
export default SearchCategory;
