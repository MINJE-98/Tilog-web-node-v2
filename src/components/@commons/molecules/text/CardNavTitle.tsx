import { HTMLAttributes, ReactNode } from "react";

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  nav?: ReactNode;
}

const CardNavTitle = ({ nav, children, ...props }: CardTitleProps) => {
  return (
    <header>
      <div className="flex justify-between">
        <h5
          {...props}
          className="font-bold text-neutral-600 dark:text-neutral-300"
        >
          {children}
        </h5>
        {nav}
      </div>
      <hr />
    </header>
  );
};
export default CardNavTitle;
