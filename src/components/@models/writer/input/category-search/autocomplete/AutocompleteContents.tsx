import { useFormContext } from "react-hook-form";

import Paragraph from "@Commons/atom/paragraph";
import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import { GetCategoriesItem } from "@til-log.lab/tilog-api";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

interface AutocompleteContentsProps {
  category: GetCategoriesItem;
}

const AutocompleteContents = ({ category }: AutocompleteContentsProps) => {
  const { setValue } = useFormContext<WriterFormTypes>();
  return (
    <button
      type="button"
      onClick={() =>
        setValue(WRITER_INPUT_TYPE.CATEGORY, {
          name: category.categoryName,
          categoryId: category.id,
        })
      }
    >
      <div className="flex items-center content-center text-2xl gap-x-3">
        <RenderTechIcons categoryName={category.categoryName} />
        <Paragraph color="black" fontSize="medium" tw="block">
          {category.categoryName}
        </Paragraph>
      </div>
      <hr className="w-[200px] border-neutral-500 dark:border-neutral-300 rounded-full my-3" />
      <Paragraph
        color="black"
        fontSize="medium"
        tw="pt-10 text-neutral-600 dark:text-neutral-300"
      >
        {category.content}
      </Paragraph>
    </button>
  );
};

export default AutocompleteContents;
