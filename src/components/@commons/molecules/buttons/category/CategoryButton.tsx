import { useRouter } from "next/router";
import React from "react";

import LinkTo from "@Commons/atom/LinkTo";
import CategorySticker from "@Commons/molecules/CategorySticker";

interface CategoryButtonProps {
  categoryName: string;
  isSelected?: boolean;
}
const CategoryButton = ({
  categoryName,
  isSelected = false,
}: CategoryButtonProps) => {
  const router = useRouter();

  if (isSelected) {
    return (
      <LinkTo
        scroll={false}
        href={`${router.asPath.split("?")[0]}`}
        className="hover:no-underline"
      >
        <CategorySticker isSelected categoryName={categoryName} />
      </LinkTo>
    );
  }

  return (
    <LinkTo
      scroll={false}
      href={{
        pathname: router.pathname,
        query: { ...router.query, category: categoryName },
      }}
      className="hover:no-underline"
    >
      <CategorySticker categoryName={categoryName} />
    </LinkTo>
  );
};
export default CategoryButton;
