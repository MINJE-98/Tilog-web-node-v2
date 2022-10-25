import React from "react";

import LinkTo from "@Commons/atom/LinkTo";
import Paragraph from "@Commons/atom/paragraph";

import { Category } from "@Api/interface/model";

interface CategoryLinkProps {
  categoryName: Category["categoryName"];
}

const CategoryLink = ({ categoryName }: CategoryLinkProps) => {
  return (
    <LinkTo
      href={{
        pathname: "/search",
        query: { category: categoryName },
      }}
      tw="font-semibold underline mb-1"
    >
      #{" "}
      <Paragraph
        color="gray"
        fontSize="medium"
        tw="inline hover:text-neutral-800 dark:hover:text-neutral-50"
      >
        {categoryName}
      </Paragraph>
    </LinkTo>
  );
};

export default CategoryLink;
