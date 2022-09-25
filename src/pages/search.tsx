import { GetServerSideProps, NextPage } from "next";

import { searchSeo } from "library/seo/searchSeo";
import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import SearchPostList from "@Components/post/list/SearchPostList";
import RootBox from "@Layouts/box/RootBox";
import { postQueryKeys } from "@Utility/queryKey";

const SearchPage: NextPage<{ categoryName: string }> = ({
  categoryName,
}: {
  categoryName: string;
}) => {
  return (
    <div>
      <DefaultSeo {...searchSeo(categoryName)} />
      <RootBox>
        <CardNavTitle>{categoryName} Search Result</CardNavTitle>
        <SearchPostList categoryName={categoryName} />
      </RootBox>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query;
  if (!category) return { props: {} };
  if (Array.isArray(category)) return { props: {} };
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    postQueryKeys.postListInfiniteSearchCategoryName(category),
    () =>
      api.postService.getCategoryPosts({
        dateScope: "All",
        sortScope: "createdAt",
        page: 0,
        categoryName: category,
        maxContent: 10,
      })
  );
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      categoryName: category,
    },
  };
};

export default SearchPage;
