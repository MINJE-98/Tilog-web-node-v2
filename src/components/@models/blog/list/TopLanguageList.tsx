import Paragraph from "@Commons/atom/paragraph";
import TopLanguageCard from "@Commons/molecules/card/github/TopLanguageCard";
import { NO_EXIST_TOP_LANGUAGE } from "@Constants/text/noExistTopLanguage";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetTopLanguages from "@Queries/github/stats/useGetTopLanguages";
import isArrayEmpty from "@Utility/isArrayEmpty";

import { Users } from "@Api/interface/model";

const TopLanguageList = ({ userName }: { userName: Users["userName"] }) => {
  const { data } = useGetTopLanguages(userName);

  if (!data)
    return (
      <Paragraph color="gray" fontSize="medium">
        {NO_EXIST_TOP_LANGUAGE}
      </Paragraph>
    );
  if (isArrayEmpty(data.data))
    return (
      <Paragraph color="gray" fontSize="medium">
        {NO_EXIST_TOP_LANGUAGE}
      </Paragraph>
    );
  return (
    <div className="flex space-x-2">
      {data.data.map((language) => (
        <TopLanguageCard key={language.name} language={language} />
      ))}
    </div>
  );
};

export default withSuspenseAndErrorBoundary(TopLanguageList);
