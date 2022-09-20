import { IconType } from "react-icons";

interface GitStatsCardProps {
  Icon: IconType;
  count: number;
  name: string;
}
const GitStatsCard = ({ Icon, count, name }: GitStatsCardProps) => {
  return (
    <div>
      <Icon className="inline mb-1 mr-1 text-sm md:text-2xl dark:text-neutral-50" />
      <p className="inline text-xs md:text-sm">
        <span className="mr-1 text-xs md:text-base">{count}</span>
        {name}
      </p>
    </div>
  );
};
export default GitStatsCard;
