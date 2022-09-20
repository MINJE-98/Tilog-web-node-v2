import Spinner from "@Commons/atom/Spinner";
import TopLanguageCard from "@Commons/molecules/card/github/TopLanguageCard";
import { NO_EXIST_TOP_LANGUAGE } from "@Constants/text/noExistTopLanguage";
import useGetTopLanguages from "@Queries/github/stats/useGetTopLanguages";
import isArrayEmpty from "@Utility/isArrayEmpty";

import { Users } from "@Api/interface/model";

const TopLanguageList = ({ userName }: { userName: Users["userName"] }) => {
  const languageList = useGetTopLanguages(userName);
  if (languageList.isLoading) return <Spinner />;
  if (!languageList.data) return <p>{NO_EXIST_TOP_LANGUAGE}</p>;
  if (isArrayEmpty(languageList.data.data))
    return <p>{NO_EXIST_TOP_LANGUAGE}</p>;
  return (
    <div className="flex space-x-2">
      {languageList.isSuccess &&
        languageList.data.data.map((language) => (
          <TopLanguageCard key={language.name} language={language} />
        ))}
    </div>
  );
};

export default TopLanguageList;
