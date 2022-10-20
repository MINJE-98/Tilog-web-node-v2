import { NextPage } from "next";

import { popularSeo } from "library/seo/popularSeo";
import { DefaultSeo } from "next-seo";

import RootBox from "@Layouts/box/RootBox";
import PopularPostSection from "@Models/popular/PopularPostSection";

const PopularPage: NextPage = () => {
  return (
    <div>
      <DefaultSeo {...popularSeo} />
      <RootBox>
        <PopularPostSection />
      </RootBox>
    </div>
  );
};

export default PopularPage;
