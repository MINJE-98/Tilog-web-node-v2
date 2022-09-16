import { IconType } from "react-icons";

interface GitStatsCardProps {
  Icon: IconType;
  count: number;
  name: string;
}
const GitStatsCard = ({ Icon, count, name }: GitStatsCardProps) => {
  return (
    <div>
      <Icon className="inline mb-1 mr-1 text-md" />
      <p className="inline text-sm">
        <span className="mr-1 text-sm">{count}</span>
        {name}
      </p>
    </div>
  );
};
export default GitStatsCard;
