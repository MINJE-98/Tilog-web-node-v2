import PinnedRepo from "@Components/blog/github/PinnedRepo";
import { NO_EXIST_PINNED_REPO } from "@Constants/text/noExistPinnedRepo";
import useGetPinnedRepo from "@Queries/github/pinned-repo/useGetPinnedRepo";
import isArrayEmpty from "@Utility/isArrayEmpty";

import { Users } from "@Api/interface/model";

const PinnedRepoList = ({ userName }: { userName: Users["userName"] }) => {
  const repoList = useGetPinnedRepo(userName);
  if (!repoList.data) return <p>{NO_EXIST_PINNED_REPO}</p>;
  if (isArrayEmpty(repoList.data.data)) return <p>{NO_EXIST_PINNED_REPO}</p>;
  return (
    <>
      {repoList.data.data.map((repo) => (
        <PinnedRepo key={repo.id} repo={repo} />
      ))}
    </>
  );
};

export default PinnedRepoList;
