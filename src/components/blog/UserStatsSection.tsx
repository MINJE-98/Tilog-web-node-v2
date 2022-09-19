import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import Spinner from "@Commons/atom/Spinner";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const UserProfile = dynamic(
  () => import("@Commons/molecules/profile/UserProfile"),
  {
    ssr: false,
  }
);

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

const BlogCategorySortButtonList = dynamic(
  () => import("@Components/blog/list/BlogCategorySortButtonList"),
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
        <UserProfile avatar={userInfo.avatar} userName={userInfo.name} />
      </section>

      <section className="order-last md:order-2">
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <BlogCategorySortButtonList />
          </ErrorBoundary>
        </Suspense>
      </section>

      <section className="order-3">
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <CardNavTitle>GithubStats</CardNavTitle>
            <GitStatsCardList userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>

      <section className="order-4">
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <CardNavTitle>TopLanguage</CardNavTitle>
            <TopLanguageList userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>

      <section className="order-5">
        <CardNavTitle>Pinned Repo</CardNavTitle>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <PinnedRepoList userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>
    </div>
  );
};

export default UserStatsSection;
