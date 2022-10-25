import { useFormContext } from "react-hook-form";

import Paragraph from "@Commons/atom/paragraph";
import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

const SelectedCategory = () => {
  const { setValue, getValues } = useFormContext();
  return (
    <div className="w-full p-3 bg-white dark:bg-neutral-800 ">
      <button
        type="button"
        className="px-4 py-2 text-lg font-bold rounded text-neutral-600 bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700 hover:dark:bg-neutral-600"
        onClick={() => setValue("category", null)}
      >
        <div className="flex items-center">
          <div className="flex items-center content-center text-2xl gap-x-3">
            <RenderTechIcons categoryName={getValues("category.name")} />
            <Paragraph color="black" fontSize="medium" tw="block">
              {getValues("category.name")}
            </Paragraph>
          </div>
        </div>
      </button>
    </div>
  );
};
export default SelectedCategory;
