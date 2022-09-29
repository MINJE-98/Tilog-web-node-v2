// 카테고리의 아이콘이랑 이름을 사용해서 스티커 형식으로 컴포넌트에 붙여쓰기 위한 컴포넌트이다.

import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

import { GetPostsCategoryItem } from "@til-log.lab/tilog-api";

const CategorySticker = ({
  categoryName,
}: {
  categoryName: GetPostsCategoryItem["name"];
}) => {
  return (
    <div className="px-4 py-1 space-x-2 bg-neutral-800 rounded-2xl w-fit">
      <div className="inline text-xl">
        <RenderTechIcons categoryName={categoryName} />
      </div>
      <span className="font-semibold text-neutral-50 dark:text-neutral-800">
        {categoryName}
      </span>
    </div>
  );
};
export default CategorySticker;
