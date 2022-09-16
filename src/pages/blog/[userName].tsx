import { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";

import api from "@Api";
import BlogPostSection from "@Components/blog/BlogPostSection";
import UserStatsSection from "@Components/blog/UserStatsSection";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import BlogBox from "@Layouts/box/BlogBox";
import RootBox from "@Layouts/box/RootBox";
import { userBlogDetailSeo } from "@SEO";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

interface BlogPagePageProps {
  userInfo: GetUserProfileResponse;
}

const BlogPage: NextPage<BlogPagePageProps> = ({
  userInfo,
}: BlogPagePageProps) => {
  const seo = userBlogDetailSeo(userInfo);

  return (
    <RootBox>
      <DefaultSeo {...seo} />
      <BlogBox>
        <UserStatsSection userInfo={userInfo} />
        <BlogPostSection userId={userInfo.id} />
      </BlogBox>
    </RootBox>
  );
};
export default BlogPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async (context) => {
    const { userName } = context.query;
    if (!userName) return { notFound: true };
    if (Array.isArray(userName)) return { notFound: true };
    try {
      const userInfo = await api.usersService.getUserProfile(userName);
      return {
        props: {
          userInfo,
        },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }
);
