import { ReactNode } from "react";

interface CardTitleProps {
  cardTitle?: ReactNode;
  Icon?: ReactNode;
}

const CardTitle = ({ Icon = null, cardTitle = null }: CardTitleProps) => {
  return (
    <section className="py-3">
      <div className="flex items-center space-x-3">
        {Icon !== null && <div className="mb-[2px]">{Icon}</div>}
        {cardTitle}
      </div>
    </section>
  );
};
export default CardTitle;
