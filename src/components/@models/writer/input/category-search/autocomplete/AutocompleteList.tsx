import { useRef } from "react";

import { NO_RESULT_SEARCH } from "@Constants/messages/error";
import useArrowKeySelector from "@Hooks/useArrowKeySelector";
import AutocompleteContents from "@Models/writer/input/category-search/autocomplete/AutocompleteContents";
import isArrayEmpty from "@Utility/isArrayEmpty";

import { GetCategoriesResponseDto } from "@til-log.lab/tilog-api";

interface AutocompleteProps {
  categoryList: GetCategoriesResponseDto["list"];
}

const AutocompleteList = ({ categoryList }: AutocompleteProps) => {
  const ref = useRef<HTMLLIElement[]>([]);
  const { index, resetIndex } = useArrowKeySelector(ref, categoryList);

  if (isArrayEmpty(categoryList)) return <p>{NO_RESULT_SEARCH}</p>;
  return (
    <div onMouseEnter={resetIndex}>
      {categoryList.map((category, idx) => (
        <li
          ref={(el) => {
            if (el) ref.current[idx] = el;
          }}
          key={category.id}
          className={`p-2 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 ${
            index === idx ? "bg-neutral-100 dark:bg-neutral-700" : ""
          }`}
        >
          <AutocompleteContents category={category} />
        </li>
      ))}
    </div>
  );
};
export default AutocompleteList;
