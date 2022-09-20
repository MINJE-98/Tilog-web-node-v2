import UserDetailProfile from "@Commons/molecules/profile/UserDetailProfile";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";
import BlogCategorySortButtonList from "@Components/blog/list/BlogCategorySortButtonList";
import GitStatsCardList from "@Components/blog/list/GitStatsCardList";
import PinnedRepoList from "@Components/blog/list/PinnedRepoList";
import TopLanguageList from "@Components/blog/list/TopLanguageList";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

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
