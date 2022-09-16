import { IconType } from "react-icons";

interface GitStatsCardProps {
  Icon: IconType;
  count: number;
  name: string;
}
const GitStatsCard = ({ Icon, count, name }: GitStatsCardProps) => {
  return (
    <div>
      <Icon className="w-4 h-4 mr-1" />
      <p>
        <span className="mr-1">{count}</span>
        {name}
      </p>
    </div>
  );
};
export default GitStatsCard;
