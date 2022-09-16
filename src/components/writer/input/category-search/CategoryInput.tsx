import { useRef } from "react";

import { useFormContext } from "react-hook-form";

import Autocomplete from "@Components/writer/input/category-search/autocomplete";
import useSearchCategoryName from "@Components/writer/input/category-search/hooks/useSearchCategoryName";
import { WRITER_INPUT_TYPE } from "@Constants/input";
import { CATEGORY_PLACEHOLDER } from "@Constants/text";
import useOutsideClickAndEscClickListener from "@Hooks/useOutsideClickAndEscClickListener";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

const CategoryInput = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener<HTMLDivElement>(ref);
  const { categoryList, handleChangeCategoryName } = useSearchCategoryName();
  const { register } = useFormContext<WriterFormTypes>();

  return (
    <div ref={ref}>
      <input
        {...register(WRITER_INPUT_TYPE.CATEGORY_ID, {
          valueAsNumber: true,
          required: true,
        })}
        autoComplete="off"
        onFocus={handleOpen}
        onChange={handleChangeCategoryName}
        className="w-full p-5 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white"
        placeholder={CATEGORY_PLACEHOLDER}
      />
      {isOpen && <Autocomplete categoryList={categoryList} />}
    </div>
  );
};
export default CategoryInput;
