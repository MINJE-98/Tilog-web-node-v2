import { GoStar, GoGitPullRequest, GoGitCommit } from "react-icons/go";

import GitStatsCard from "@Components/blog/github/GitStatsCard";
import useGetUserStats from "@Queries/github/stats/useGetUserStats";

import { Users } from "@Api/interface/model";

const GitStats = ({ userName }: { userName: Users["userName"] }) => {
  const { data } = useGetUserStats(userName);
  if (!data) return <>없어</>;
  return (
    <div className="flex items-center">
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
    </div>
  );
};
export default GitStats;
