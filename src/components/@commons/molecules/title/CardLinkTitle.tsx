import { HTMLAttributes, ReactNode } from "react";

import LinkTo from "@Commons/atom/LinkTo";

interface CardLinkTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  href: string;
  Icon?: ReactNode;
}

const CardLinkTitle = ({
  Icon = null,
  title,
  href,
  className = "font-bold text-neutral-600 dark:text-neutral-300",
  ...props
}: CardLinkTitleProps) => {
  return (
    <section className="py-3">
      <div className="flex items-center space-x-3">
        {Icon}
        <LinkTo scroll={false} href={href}>
          <h5 {...props} className={className}>
            {title}
          </h5>
        </LinkTo>
      </div>
    </section>
  );
};
export default CardLinkTitle;
