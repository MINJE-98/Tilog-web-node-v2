import { useEffect } from "react";

import TopLanguageCard from "@Commons/molecules/card/github/TopLanguageCard";
import { NO_EXIST_TOP_LANGUAGE } from "@Constants/text/noExistTopLanguage";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetTopLanguages from "@Queries/github/stats/useGetTopLanguages";
import isArrayEmpty from "@Utility/isArrayEmpty";

import { Users } from "@Api/interface/model";

const TopLanguageList = ({ userName }: { userName: Users["userName"] }) => {
  const languageList = useGetTopLanguages(userName);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("TopLanguageList", "Hydrated");
  }, []);
  if (!languageList.data) return <p>{NO_EXIST_TOP_LANGUAGE}</p>;
  if (isArrayEmpty(languageList.data.data))
    return <p>{NO_EXIST_TOP_LANGUAGE}</p>;
  return (
    <div className="flex space-x-2">
      {languageList.data.data.map((language) => (
        <TopLanguageCard key={language.name} language={language} />
      ))}
    </div>
  );
};

export default withSuspenseAndErrorBoundary(TopLanguageList);
