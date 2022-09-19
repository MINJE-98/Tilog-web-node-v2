import { GetServerSideProps, NextPage } from "next";

import { searchSeo } from "library/seo/searchSeo";
import { DefaultSeo } from "next-seo";

import PostCard from "@Commons/molecules/card/post/PostCard";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import PostCardInfiniteList from "@Commons/organisms/list/PostCardInfiniteList";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import useGetSearchPostInfiniteList from "@Queries/posts/useGetSearchPostInfiniteList";

import { Category } from "@Api/interface/model";

const SearchPage: NextPage<Category> = ({ categoryName }: Category) => {
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
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async (context) => {
    const { category } = context.query;
    if (!category) return { notFound: true };
    if (Array.isArray(category)) return { notFound: true };
    return {
      props: {
        categoryName: category,
      },
    };
  }
);
