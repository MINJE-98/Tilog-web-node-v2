import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

import Spinner from "@Commons/atom/Spinner";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";
import UserDetailProfile from "@Commons/molecules/profile/UserDetailProfile";
import CardNavTitle from "@Commons/molecules/text/CardNavTitle";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const GitStatsCardList = dynamic(
  () => import("@Components/blog/list/GitStatsCardList"),
  {
    suspense: true,
  }
);
const PinnedRepoList = dynamic(
  () => import("@Components/blog/list/PinnedRepoList"),
  {
    suspense: true,
  }
);

const TopLanguageList = dynamic(
  () => import("@Components/blog/list/TopLanguageList"),
  {
    suspense: true,
  }
);

const BlogCategorySortButtonList = dynamic(
  () => import("@Components/blog/list/BlogCategorySortButtonList"),
  {
    suspense: true,
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
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <>
            <section className="order-last md:order-2">
              <CardNavTitle>Categories</CardNavTitle>
              <Suspense fallback={<Spinner />}>
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={ComponentLoadError}
                >
                  <BlogCategorySortButtonList />
                </ErrorBoundary>
              </Suspense>
            </section>

            <section className="order-3">
              <CardNavTitle>GithubStats</CardNavTitle>
              <Suspense fallback={<Spinner />}>
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={ComponentLoadError}
                >
                  <GitStatsCardList userName={userInfo.name} />
                </ErrorBoundary>
              </Suspense>
            </section>

            <section className="order-4">
              <CardNavTitle>TopLanguage</CardNavTitle>
              <Suspense fallback={<Spinner />}>
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={ComponentLoadError}
                >
                  <TopLanguageList userName={userInfo.name} />
                </ErrorBoundary>
              </Suspense>
            </section>

            <section className="order-5">
              <CardNavTitle>Pinned Repo</CardNavTitle>
              <Suspense fallback={<Spinner />}>
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={ComponentLoadError}
                >
                  <PinnedRepoList userName={userInfo.name} />
                </ErrorBoundary>
              </Suspense>
            </section>
          </>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
};

export default UserStatsSection;
