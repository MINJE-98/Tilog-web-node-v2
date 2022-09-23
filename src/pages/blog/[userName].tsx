import { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import BlogPostList from "@Components/blog/list/BlogPostList";
import UserStatsSection from "@Components/blog/UserStatsSection";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import BlogBox from "@Layouts/box/BlogBox";
import RootBox from "@Layouts/box/RootBox";
import { userBlogDetailSeo } from "@SEO";
import { categoryQueryKeys, postQueryKeys } from "@Utility/queryKey";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

interface BlogPagePageProps {
  userInfo: GetUserProfileResponse;
  categoryName: string;
}

const BlogPage: NextPage<BlogPagePageProps> = ({
  userInfo,
  categoryName,
}: BlogPagePageProps) => {
  const seo = userBlogDetailSeo(userInfo);

  return (
    <RootBox>
      <DefaultSeo {...seo} />
      <BlogBox>
        <UserStatsSection userInfo={userInfo} />
        <div className="min-w-[600px] w-full mt-10 md:mt-0">
          <CardNavTitle>{categoryName} Posts</CardNavTitle>
          <BlogPostList categoryName={categoryName} userId={userInfo.id} />
        </div>
      </BlogBox>
    </RootBox>
  );
};
export default BlogPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async (context) => {
    const { userName, category } = context.query;
    const categoryName = !category ? "" : category;
    if (!userName) return { notFound: true };

    if (Array.isArray(userName) || Array.isArray(categoryName))
      return { notFound: true };

    const queryClient = new QueryClient();
    let userInfo: GetUserProfileResponse;
    try {
      userInfo = await api.usersService.getUserProfile(userName);
    } catch (error) {
      return {
        notFound: true,
      };
    }

    await queryClient.prefetchInfiniteQuery(
      postQueryKeys.postListInfiniteUserCategoryName(userInfo.id, ""),
      () =>
        api.postService.getCategoryPosts({
          dateScope: "All",
          sortScope: "createdAt",
          page: 0,
          categoryName,
          maxContent: 10,
          userId: userInfo.id,
        })
    );
    await queryClient.prefetchQuery(categoryQueryKeys.categoryName(), () =>
      api.categoryService.getCategories()
    );

    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
        userInfo,
        categoryName,
      },
    };
  }
);
