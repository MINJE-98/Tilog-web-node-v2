import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

import TopLanguageResponse from "@Api/github/interface/topLanguageResponse";

const TopLanguage = ({ language }: { language: TopLanguageResponse }) => {
  return (
    <div
      key={language.size}
      className="flex flex-col w-full h-32 mr-5 bg-gray-800 border border-gray-200 lg:w-32 rounded-3xl dark:border-gray-700"
    >
      {/* Card icon */}
      <div className="flex items-center justify-center p-2 m-3 border border-gray-500 w-9 h-9 rounded-xl">
        <RenderTechIcons categoryName={language.name} />
      </div>
      {/* Card title */}
      <div className="m-3">
        <p className="mr-1 text-sm font-medium text-gray-100">
          {language.name}
        </p>
        <p className="text-xs text-gray-400">{language.percent}% Total used</p>
      </div>
    </div>
  );
};

export default TopLanguage;
