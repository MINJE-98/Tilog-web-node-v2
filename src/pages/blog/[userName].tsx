import { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";

import api from "@Api";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import BlogBox from "@Layouts/box/BlogBox";
import RootBox from "@Layouts/box/RootBox";
import UserPostSection from "@Models/blog/UserPostSection";
import UserStatsSection from "@Models/blog/UserStatsSection";
import { userBlogDetailSeo } from "@SEO";

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
        <div className="flex-auto">
          <UserStatsSection userInfo={userInfo} />
        </div>
        <div className="flex-none max-w-[1280px] xl:max-w-[650px] mt-10 xl:mt-0 space-y-4">
          <UserPostSection category={categoryName} userId={userInfo.id} />
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

    let userInfo: GetUserProfileResponse;
    try {
      userInfo = await api.usersService.getUserProfile(userName);
    } catch (error) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        userInfo,
        categoryName,
      },
    };
  }
);
