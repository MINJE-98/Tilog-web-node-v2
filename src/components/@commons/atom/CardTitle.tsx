import { HTMLAttributes, ReactNode } from "react";

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  nav?: ReactNode;
}

const CardTitle = ({ nav, children, ...props }: CardTitleProps) => {
  return (
    <header>
      <div className="flex justify-between">
        <h4 {...props} className="text-neutral-600 dark:text-neutral-300">
          {children}
        </h4>
        {nav}
      </div>
      <hr />
    </header>
  );
};
export default CardTitle;
