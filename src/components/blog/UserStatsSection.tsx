import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import CardTitle from "@Commons/atom/CardTitle";
import Spinner from "@Commons/atom/loading/Spinner";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const UserInfoProfile = dynamic(
  () => import("@Commons/organisms/profile/UserInfoProfile"),
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

const CategorySortButtonList = dynamic(
  () => import("@Commons/organisms/list/CategorySortButtonList"),
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
        <Suspense fallback={<Spinner size="w-10 h-10" />}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <UserInfoProfile userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>

      <section className="order-last md:order-2">
        <Suspense fallback={<Spinner size="w-10 h-10" />}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <CardTitle>Categories</CardTitle>
            <CategorySortButtonList />
          </ErrorBoundary>
        </Suspense>
      </section>

      <section className="order-3">
        <Suspense fallback={<Spinner size="w-10 h-10" />}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <CardTitle>GithubStats</CardTitle>
            <GitStatsCardList userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>

      <section className="order-4">
        <Suspense fallback={<Spinner size="w-10 h-10" />}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <CardTitle>TopLanguage Repo</CardTitle>
            <TopLanguageList userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>

      <section className="order-5">
        <CardTitle>Pinned Repo</CardTitle>
        <Suspense fallback={<Spinner size="w-10 h-10" />}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <PinnedRepoList userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>
    </div>
  );
};

export default UserStatsSection;
