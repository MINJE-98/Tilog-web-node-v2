import { GoRepo, GoLink, GoStar } from "react-icons/go";

import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

import PinnedRepoResponse from "@Api/github/interface/pinnedRepoResponse";

const PinnedRepo = ({ repo }: { repo: PinnedRepoResponse }) => {
  return (
    <div className="flex flex-col w-full transition duration-500 ease-in-out bg-white border border-gray-200 cursor-pointer h-44 rounded-3xl filter hover:drop-shadow-2xl dark:bg-gray-800 dark:border-gray-600">
      <div className="px-5 py-3">
        <div className="flex items-center">
          <GoRepo className="w-4 h-4 mr-2 dark:text-blue-500" />
          <p className="font-medium text-gray-700 truncate dark:text-gray-50">
            {repo.nameWithOwner.split("/")[1]}
          </p>
        </div>
        {/* Card desc */}
        <div className="flex flex-col px-5 py-2">
          <span className="w-full text-xs text-gray-800 truncate dark:text-gray-100">
            {repo.description}
          </span>
        </div>
      </div>
      <div className="flex flex-row mx-5">
        <div className="flex items-center justify-center p-2 text-gray-800 border border-gray-200 w-9 h-9 rounded-xl dark:text-blue-500 dark:border-gray-700">
          <RenderTechIcons categoryName={repo.primaryLanguage.name} />
        </div>
      </div>
      <div className="w-full h-1 my-3 bg-gray-200 round-full dark:bg-gray-700" />
      <div className="flex mx-5">
        <div className="flex items-center ml-auto">
          <GoLink className="w-3 h-3 mr-1 dark:text-blue-500" />
          <a
            href={`https://www.github.com/${repo.nameWithOwner}`}
            rel="noreferrer"
            target="_blank"
          >
            <p className="mr-2 text-xs text-gray-700 dark:text-gray-100">
              Click to open repository
            </p>
          </a>

          <GoStar className="w-3 h-3 mr-1 dark:text-blue-500" />

          <p className="text-xs text-gray-700 dark:text-gray-100">
            {repo.stargazers.totalCount}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PinnedRepo;
