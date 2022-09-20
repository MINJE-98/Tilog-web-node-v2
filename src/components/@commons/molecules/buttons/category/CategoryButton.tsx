import { useRouter } from "next/router";
import React from "react";

import LinkTo from "@Commons/atom/LinkTo";

interface CategoryButtonProps {
  categoryName: string;
}
const CategoryButton = ({ categoryName }: CategoryButtonProps) => {
  const router = useRouter();
  return (
    <LinkTo
      scroll={false}
      href={{
        pathname: router.pathname,
        query: { ...router.query, category: categoryName },
      }}
      className="p-2 text-sm font-semibold rounded-sm hover:no-underline bg-neutral-50 dark:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-700 hover:bg-neutral-100 hover:dark:bg-neutral-700"
    >
      <span className={`text-${categoryName}`}># </span>
      <span className="text-neutral-900 dark:text-neutral-50">
        {categoryName}
      </span>
    </LinkTo>
  );
};
export default CategoryButton;
