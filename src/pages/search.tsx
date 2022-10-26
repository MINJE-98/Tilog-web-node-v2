import { GetServerSideProps, NextPage } from "next";

import { searchSeo } from "library/seo/searchSeo";
import { DefaultSeo } from "next-seo";

import RootBox from "@Layouts/box/RootBox";
import SearchPostSection from "@Models/search/SearchPostSection";

const SearchPage: NextPage<{ categoryName: string }> = ({
  categoryName,
}: {
  categoryName: string;
}) => {
  return (
    <div>
      <DefaultSeo {...searchSeo(categoryName)} />
      <RootBox>
        <SearchPostSection category={categoryName} />
      </RootBox>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query;
  if (!category) return { props: {} };
  if (Array.isArray(category)) return { props: {} };

  return {
    props: {
      categoryName: category,
    },
  };
};

export default SearchPage;
