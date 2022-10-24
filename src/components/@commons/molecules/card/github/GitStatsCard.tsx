import { IconType } from "react-icons";

import Paragraph from "@Commons/atom/paragraph";

interface GitStatsCardProps {
  Icon: IconType;
  count: number;
  name: string;
}
const GitStatsCard = ({ Icon, count, name }: GitStatsCardProps) => {
  return (
    <div tw="flex items-center">
      <Icon className="mb-1 mr-1 text-sm md:text-2xl dark:text-neutral-50" />
      <Paragraph fontSize="medium">
        <span className="mr-1 text-xs md:text-base">{count}</span>
        {name}
      </Paragraph>
    </div>
  );
};
export default GitStatsCard;
