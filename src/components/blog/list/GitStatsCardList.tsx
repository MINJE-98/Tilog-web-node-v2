import { useEffect } from "react";

import { GoStar, GoGitPullRequest, GoGitCommit } from "react-icons/go";
import { VscIssues } from "react-icons/vsc";

import GitStatsCard from "@Commons/molecules/card/github/GitStatsCard";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetUserStats from "@Queries/github/stats/useGetUserStats";

import { Users } from "@Api/interface/model";

const GitStats = ({ userName }: { userName: Users["userName"] }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("GitStats", "Hydrated");
  }, []);
  const { data } = useGetUserStats(userName);
  if (!data) return <>없어</>;
  return (
    <div className="flex items-center justify-center space-x-2">
      <GitStatsCard Icon={GoStar} count={data.totalStars} name="Stars" />
      <GitStatsCard Icon={GoGitPullRequest} count={data.totalPRs} name="PRs" />
      <GitStatsCard
        Icon={GoGitCommit}
        count={data.totalCommits}
        name="Commits"
      />
      <GitStatsCard Icon={VscIssues} count={data.totalIssues} name="Issues" />
    </div>
  );
};
export default withSuspenseAndErrorBoundary(GitStats);
