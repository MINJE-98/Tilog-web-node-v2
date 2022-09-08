import { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";

import api from "@Api";
import Header from "@Commons/organisms/header";
import CategorySortButtonList from "@Commons/organisms/list/CategorySortButtonList";
import PostCardList from "@Commons/organisms/list/PostCardList";
import UserInfoProfile from "@Commons/organisms/profile/UserInfoProfile";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import useGetStringTypeToRouter from "@Hooks/useGetStringTypeToRouter";
import RootBox from "@Layouts/box/RootBox";
import { userBlogDetailSeo } from "@SEO";

import GetUserProfileResponseTransFormSettingsDto from "@Api/users/interface/getUserProfileResponseTransFormSettingsDto";

interface BlogPagePageProps {
  userInfo: GetUserProfileResponseTransFormSettingsDto;
}
// TODO: 현재 BlogPage는 UserID 1 번을 반환하도록 하드 코딩되어 있습니다. userName로 전달받을 수 있게 변경된 후 코드를 변경해야합니다.
const BlogPage: NextPage<BlogPagePageProps> = ({
  userInfo,
}: BlogPagePageProps) => {
  const category = useGetStringTypeToRouter("category");
  const seo = userBlogDetailSeo(userInfo);
  return (
    <div>
      <DefaultSeo {...seo} />
      <Header />
      <CategorySortButtonList userId={1} />

      <RootBox>
        <div className="grid justify-center grid-flow-row p-3 md:justify-between md:grid-flow-col">
          <div className="w-full max-w-[450px]">
            <UserInfoProfile userId={1} />
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
          />
        </div>
      </RootBox>
    </div>
  );
};
export default BlogPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async (context) => {
    const { userId } = context.query;
    if (!userId) return { notFound: true };
    if (Array.isArray(userId)) return { notFound: true };
    try {
      const numberUserId = parseInt(userId, 10);
      const userInfo = await api.usersService.getUserProfile(numberUserId);
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
