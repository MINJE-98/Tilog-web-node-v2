import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

import TopLanguageResponse from "@Api/github/interface/topLanguageResponse";

const TopLanguage = ({ language }: { language: TopLanguageResponse }) => {
  return (
    <div className="w-20 h-20 px-5 py-3 text-center bg-neutral-100 dark:bg-neutral-800 rounded-3xl">
      <div className="text-2xl">
        <RenderTechIcons categoryName={language.name} />
      </div>
      {/* Card title */}
      <div>
        <span className="text-sm font-black">{language.percent}%</span>
      </div>
    </div>
  );
};

export default TopLanguage;
