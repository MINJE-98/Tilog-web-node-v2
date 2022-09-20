import { useFormContext } from "react-hook-form";

import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const SelectedCategory = () => {
  const { setValue, getValues } = useFormContext<WriterFormTypes>();
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
            <span className="block font-medium">
              {getValues("category.name")}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};
export default SelectedCategory;
