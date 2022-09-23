import PinnedRepoCard from "@Commons/molecules/card/github/PinnedRepoCard";
import { NO_EXIST_PINNED_REPO } from "@Constants/text/noExistPinnedRepo";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetPinnedRepo from "@Queries/github/pinned-repo/useGetPinnedRepo";
import isArrayEmpty from "@Utility/isArrayEmpty";

import { Users } from "@Api/interface/model";

const PinnedRepoList = ({ userName }: { userName: Users["userName"] }) => {
  const { data } = useGetPinnedRepo(userName);

  if (!data) return <p>{NO_EXIST_PINNED_REPO}</p>;
  if (isArrayEmpty(data.data)) return <p>{NO_EXIST_PINNED_REPO}</p>;
  return (
    <div className="flex flex-col space-y-3">
      {data.data.map((repo) => (
        <PinnedRepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default withSuspenseAndErrorBoundary(PinnedRepoList);
