import dynamic from "next/dynamic";

import UserDetailProfile from "@Commons/molecules/profile/UserDetailProfile";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import BlogCategorySortButtonList from "@Components/blog/list/BlogCategorySortButtonList";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const GitStatsCardList = dynamic(
  () => import("@Components/blog/list/GitStatsCardList"),
  {
    ssr: false,
  }
);

const PinnedRepoList = dynamic(
  () => import("@Components/blog/list/PinnedRepoList"),
  {
    ssr: false,
  }
);

const TopLanguageList = dynamic(
  () => import("@Components/blog/list/TopLanguageList"),
  {
    ssr: false,
  }
);

const UserStatsSection = ({
  userInfo,
}: {
  userInfo: GetUserProfileResponse;
}) => {
  return (
    <div className="flex flex-col space-y-10 w-full max-w-[450px]">
      <section className="order-1">
        <UserDetailProfile userInfo={userInfo} />
      </section>

      <section className="order-last md:order-2">
        <CardNavTitle>Categories</CardNavTitle>
        <BlogCategorySortButtonList />
      </section>

      <section className="order-3">
        <CardNavTitle>GithubStats</CardNavTitle>
        <GitStatsCardList userName={userInfo.name} />
      </section>

      <section className="order-4">
        <CardNavTitle>TopLanguage</CardNavTitle>
        <TopLanguageList userName={userInfo.name} />
      </section>

      <section className="order-5">
        <CardNavTitle>Pinned Repo</CardNavTitle>
        <PinnedRepoList userName={userInfo.name} />
      </section>
    </div>
  );
};

export default UserStatsSection;
