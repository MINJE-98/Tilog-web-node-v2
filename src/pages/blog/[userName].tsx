import { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";

import api from "@Api";
import Header from "@Commons/organisms/header";
import PostCardList from "@Commons/organisms/list/PostCardList";
import UserInfoProfile from "@Commons/organisms/profile/UserInfoProfile";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import useCategoryRouter from "@Hooks/useCategoryRouter";
import RootBox from "@Layouts/box/RootBox";
import { userBlogDetailSeo } from "@SEO";

import GetUserProfileResponseTransFormSettingsDto from "@Api/users/interface/getUserProfileResponseTransFormSettingsDto";

interface BlogPagePageProps {
  userInfo: GetUserProfileResponseTransFormSettingsDto;
}

const BlogPage: NextPage<BlogPagePageProps> = ({
  userInfo,
}: BlogPagePageProps) => {
  const category = useCategoryRouter();
  const seo = userBlogDetailSeo(userInfo);
  return (
    <div>
      <DefaultSeo {...seo} />
      <Header />

      <RootBox>
        <div className="grid justify-center grid-flow-row p-3 md:justify-between md:grid-flow-col">
          <div className="w-full max-w-[450px]">
            <UserInfoProfile userName={userInfo.name} />
            <hr />
            {/* TODO GITHUB STATUS LINK */}
            <p className="text-lg text-neutral-600">Pinned Repo</p>
            <div className="flex flex-col gap-y-1">
              <div className="h-20 rounded w-30 bg-neutral-500" />
              <div className="h-20 rounded w-30 bg-neutral-500" />
              <div className="h-20 rounded w-30 bg-neutral-500" />
              <div className="h-20 rounded w-30 bg-neutral-500" />
            </div>
            <hr />

            {/* TODO GITHUB STATUS LINK */}
            <p className="text-lg text-neutral-600">TopLanguage Repo</p>
            <div className="flex flex-row gap-x-1">
              <div className="w-10 h-10 rounded bg-neutral-500" />
              <div className="w-10 h-10 rounded bg-neutral-500" />
              <div className="w-10 h-10 rounded bg-neutral-500" />
              <div className="w-10 h-10 rounded bg-neutral-500" />
              <div className="w-10 h-10 rounded bg-neutral-500" />
            </div>
            <hr />
          </div>
          <PostCardList
            dateScope="All"
            sortScope="createdAt"
            page={0}
            categoryName={category}
            maxContent={10}
            userId={1}
            isViewType="infinite"
          />
        </div>
      </RootBox>
    </div>
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
