import { useRef } from "react";

import { Controller } from "react-hook-form";

import Spinner from "@Commons/atom/Spinner";
import AutocompleteList from "@Components/writer/input/category-search/autocomplete/AutocompleteList";
import useSearchCategoryName from "@Components/writer/input/category-search/hooks/useSearchCategoryName";
import { CATEGORY_PLACEHOLDER } from "@Constants/text";
import useOutsideClickAndEscClickListener from "@Hooks/useOutsideClickAndEscClickListener";

const CategoryInput = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener<HTMLDivElement>(ref);
  const { searchCategory, handleChangeCategoryName } = useSearchCategoryName();

  return (
    <div ref={ref}>
      <Controller
        name="category"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <input
            ref={field.ref}
            onFocus={handleOpen}
            onChange={handleChangeCategoryName}
            className="w-full p-5 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white"
            placeholder={CATEGORY_PLACEHOLDER}
          />
        )}
      />
      {isOpen && (
        <ul className="z-50 absolute p-3 my-2 mr-8 rounded shadow-sm cursor-default ring-1 max-w-[500px] max-h-[400px] overflow-auto bg-neutral-200 ring-neutral-300 dark:ring-neutral-600 dark:bg-neutral-800">
          {searchCategory.isLoading && <Spinner />}
          {searchCategory.isSuccess && (
            <AutocompleteList categoryList={searchCategory.data.data.list} />
          )}
        </ul>
      )}
    </div>
  );
};
export default CategoryInput;
