import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

import { GetPostsCategoryItem } from "@til-log.lab/tilog-api";

interface CategoryStickerProps {
  categoryName: GetPostsCategoryItem["name"];
  isSelected?: boolean;
}
const CategorySticker = ({
  categoryName,
  isSelected = false,
}: CategoryStickerProps) => {
  return (
    <div
      className={`${
        isSelected
          ? "bg-neutral-700 dark:bg-neutral-200"
          : "bg-neutral-200 dark:bg-neutral-700"
      }  flex items-center pt-[2px] pb-[4px] px-4 space-x-2 rounded-2xl w-fit`}
    >
      <div className="text-xl">
        <RenderTechIcons categoryName={categoryName} />
      </div>
      <span
        className={`${
          isSelected
            ? "text-neutral-50 dark:text-neutral-800"
            : "text-neutral-800 dark:text-neutral-50"
        } mt-[2px] font-semibold`}
      >
        {categoryName}
      </span>
    </div>
  );
};
export default CategorySticker;
