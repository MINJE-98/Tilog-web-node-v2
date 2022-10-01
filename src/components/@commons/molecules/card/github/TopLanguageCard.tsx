import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";

import TopLanguageResponse from "@Api/github/interface/topLanguageResponse";

const TopLanguage = ({ language }: { language: TopLanguageResponse }) => {
  return (
    <div className="w-16 h-16 px-4 py-[0.28rem] text-center md:py-3 md:w-20 md:h-20 bg-neutral-100 dark:bg-neutral-800 rounded-3xl">
      <div className="text-2xl">
        <RenderTechIcons categoryName={language.name} />
      </div>
      <span className="font-black">{language.percent}%</span>
    </div>
  );
};

export default TopLanguage;
