import { useRouter } from "next/router";
import React from "react";

import LinkTo from "@Components/@commons/atom/LinkTo";
import queryString from "@Utility/queryString";

interface CategorySortButtonProps {
  categoryName: string;
}

const CategorySortButton = ({ categoryName }: CategorySortButtonProps) => {
  const router = useRouter();

  if (router.query.category !== categoryName) {
    return (
      <LinkTo
        scroll={false}
        href={{
          pathname: router.pathname,
          query: { ...router.query, category: categoryName },
        }}
        className="p-2 text-lg font-semibold hover:no-underline text-neutral-400 dark:text-neutral-50"
      >
        {categoryName}
      </LinkTo>
    );
  }
  return (
    <LinkTo
      scroll={false}
      href={`${queryString(router.asPath, "category", categoryName)}`}
      className="p-2 text-lg font-semibold hover:no-underline text-neutral-800 dark:text-neutral-400"
    >
      {categoryName}
    </LinkTo>
  );
};

export default CategorySortButton;
