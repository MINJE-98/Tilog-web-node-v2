import { GoStar, GoGitPullRequest, GoGitCommit } from "react-icons/go";
import { VscIssues } from "react-icons/vsc";

import Spinner from "@Commons/atom/Spinner";
import GitStatsCard from "@Commons/molecules/card/github/GitStatsCard";
import useGetUserStats from "@Queries/github/stats/useGetUserStats";

import { Users } from "@Api/interface/model";

const GitStats = ({ userName }: { userName: Users["userName"] }) => {
  const { data, isLoading } = useGetUserStats(userName);
  if (!data) return <>없어</>;
  if (isLoading) return <Spinner />;
  return (
    <div className="flex items-center space-x-2">
      <GitStatsCard Icon={GoStar} count={data.data.totalStars} name="Stars" />
      <GitStatsCard
        Icon={GoGitPullRequest}
        count={data.data.totalPRs}
        name="PRs"
      />
      <GitStatsCard
        Icon={GoGitCommit}
        count={data.data.totalCommits}
        name="Commits"
      />
      <GitStatsCard
        Icon={VscIssues}
        count={data.data.totalIssues}
        name="Issues"
      />
    </div>
  );
};
export default GitStats;
