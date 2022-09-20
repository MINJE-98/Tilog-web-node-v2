import { NextPage } from "next";

import { searchSeo } from "library/seo/searchSeo";
import { DefaultSeo } from "next-seo";

import PostCard from "@Commons/molecules/card/post/PostCard";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import useStringRouter from "@Hooks/useStringRouter";
import RootBox from "@Layouts/box/RootBox";
import useGetSearchPostInfiniteList from "@Queries/posts/useGetSearchPostInfiniteList";

const SearchPage: NextPage = () => {
  const categoryName = useStringRouter("category");
  const searchPostList = useGetSearchPostInfiniteList({
    dateScope: "All",
    sortScope: "createdAt",
    page: 0,
    categoryName,
    maxContent: 10,
  });
  return (
    <div>
      <DefaultSeo {...searchSeo(categoryName)} />
      <RootBox>
        <div className="inline">
          <CardNavTitle>{categoryName} 검색 결과</CardNavTitle>
        </div>
        <PostCardInfiniteList
          twoRow
          CardComponent={PostCard}
          postList={searchPostList}
        />
      </RootBox>
    </div>
  );
};

export default SearchPage;
