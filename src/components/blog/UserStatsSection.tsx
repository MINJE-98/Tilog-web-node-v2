import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import CardTitle from "@Commons/atom/CardTitle";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const UserInfoProfile = dynamic(
  () => import("@Commons/organisms/profile/UserInfoProfile"),
  {
    suspense: true,
    ssr: false,
  }
);

const PinnedRepoList = dynamic(
  () => import("@Components/blog/github/PinnedRepoList"),
  {
    suspense: true,
    ssr: false,
  }
);

const TopLanguageList = dynamic(
  () => import("@Components/blog/github/TopLanguageList"),
  {
    suspense: true,
    ssr: false,
  }
);

const CategorySortButtonList = dynamic(
  () => import("@Commons/organisms/list/CategorySortButtonList"),
  {
    suspense: true,
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
      <section>
        <Suspense fallback={<>로딩중이야.</>}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <UserInfoProfile userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<>로딩중이야.</>}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <CardTitle>Categories</CardTitle>
            <CategorySortButtonList />
          </ErrorBoundary>
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<>로딩중이야.</>}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <CardTitle>Pinned Repo</CardTitle>
            <TopLanguageList userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>
      <section>
        <CardTitle>TopLanguage Repo</CardTitle>
        <Suspense fallback={<>로딩중이야.</>}>
          <ErrorBoundary fallback={<>에러 났어.</>}>
            <PinnedRepoList userName={userInfo.name} />
          </ErrorBoundary>
        </Suspense>
      </section>
    </div>
  );
};

export default UserStatsSection;
