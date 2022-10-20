import { NextPage } from "next";

import { searchSeo } from "library/seo/searchSeo";
import { DefaultSeo } from "next-seo";

import useStringRouter from "@Hooks/useStringRouter";
import RootBox from "@Layouts/box/RootBox";
import SearchPostSection from "@Models/search/SearchPostSection";

const SearchPage: NextPage = () => {
  const categoryName = useStringRouter("category");
  return (
    <div>
      <DefaultSeo {...searchSeo(categoryName)} />
      <RootBox>
        <SearchPostSection category={categoryName} />
      </RootBox>
    </div>
  );
};

export default SearchPage;
