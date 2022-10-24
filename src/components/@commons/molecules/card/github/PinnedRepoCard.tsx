import { GoRepo, GoLink, GoStar } from "react-icons/go";

import Heading from "@Commons/atom/heading";
import Paragraph from "@Commons/atom/paragraph";
import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

import PinnedRepoResponse from "@Api/github/interface/pinnedRepoResponse";

const PinnedRepo = ({ repo }: { repo: PinnedRepoResponse }) => {
  return (
    <div className="w-full border-gray-200 bg-neutral-100 h-fit dark:bg-neutral-800 dark:border-gray-600">
      <div className="px-5 pt-3">
        <section tw="flex items-center">
          <GoRepo tw="inline w-4 h-4 mb-1 mr-2 text-neutral-900 dark:text-neutral-50" />
          <Heading level={3} tw="font-bold">
            {repo.name}
          </Heading>
        </section>
        <Paragraph fontSize="medium" tw="py-1 text-sm px-7">
          {repo.description}
        </Paragraph>
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
          <Paragraph
            fontSize="small"
            tw="text-xs hover:text-neutral-900 dark:hover:text-neutral-50"
          >
            Click to open repository
          </Paragraph>
        </a>
        <div tw="flex items-center space-x-1">
          <GoStar tw="text-neutral-500" />
          <Paragraph fontSize="small">{repo.stargazers.totalCount}</Paragraph>
        </div>
      </div>
    </div>
  );
};
export default PinnedRepo;
