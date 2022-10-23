import { ReactNode } from "react";

import Heading from "@Commons/atom/heading";

interface EmptyContentsCardProps {
  title: string;
  subTitle?: ReactNode;
  Icon?: ReactNode;
}

const EmptyContentsCard = ({
  title,
  subTitle = "",
  Icon = "",
}: EmptyContentsCardProps) => {
  return (
    <div className="flex items-center justify-center py-5 space-x-10 lg:w-[600px] w-full">
      {Icon}
      <div className="text-center">
        <Heading level={5}>{title}</Heading>
        {subTitle}
      </div>
    </div>
  );
};
export default EmptyContentsCard;
