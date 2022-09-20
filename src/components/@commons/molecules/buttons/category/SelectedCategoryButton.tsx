import { useRouter } from "next/router";
import React from "react";

import LinkTo from "@Commons/atom/LinkTo";

interface CategorySortButtonProps {
  categoryName: string;
}
const CategorySortButton = ({ categoryName }: CategorySortButtonProps) => {
  const router = useRouter();
  return (
    <LinkTo
      scroll={false}
      href={`${router.asPath.split("?")[0]}`}
      className="p-2 text-sm font-semibold rounded-sm hover:no-underline bg-neutral-100 dark:bg-neutral-700 ring-1 ring-neutral-200 dark:ring-neutral-700 hover:bg-neutral-50 hover:dark:bg-neutral-800"
    >
      <span className={`text-${categoryName}`}># {categoryName}</span>
    </LinkTo>
  );
};
export default CategorySortButton;
