import { GoRepo, GoLink, GoStar } from "react-icons/go";

import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

import PinnedRepoResponse from "@Api/github/interface/pinnedRepoResponse";

const PinnedRepo = ({ repo }: { repo: PinnedRepoResponse }) => {
  return (
    <div className="w-full border-gray-200 bg-neutral-100 h-fit dark:bg-neutral-800 dark:border-gray-600">
      <div className="px-5 pt-3">
        <section>
          <GoRepo className="inline w-4 h-4 mb-1 mr-2 text-neutral-900 dark:text-neutral-50" />
          <h1 className="inline text-lg font-bold">{repo.name}</h1>
          <p className="py-1 text-sm px-7">{repo.description}</p>
        </section>
        <div className="text-xl">
          <RenderTechIcons categoryName={repo.primaryLanguage.name} />
        </div>
      </div>
      <div
        style={{ backgroundColor: repo.primaryLanguage.color }}
        className="w-full h-1 my-3"
      />
      <div className="flex items-center justify-end px-5 pb-3 space-x-2">
        <GoLink className="text-neutral-700 dark:text-neutral-50" />
        <a
          href={`https://www.github.com/${repo.nameWithOwner}`}
          rel="noreferrer"
          target="_blank"
        >
          <p className="text-xs hover:text-neutral-900 dark:hover:text-neutral-50">
            Click to open repository
          </p>
        </a>
        <div className="space-x-1">
          <GoStar className="inline text-neutral-700 dark:text-neutral-50" />
          <p className="inline text-xs text-gray-700 dark:text-gray-100">
            {repo.stargazers.totalCount}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PinnedRepo;
