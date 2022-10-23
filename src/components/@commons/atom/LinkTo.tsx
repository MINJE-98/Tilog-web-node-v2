import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

import Anchor from "@Commons/atom/anchor";

type PropTypes = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const LinkTo = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...anchorProps
}: PropsWithChildren<PropTypes>) => {
  return (
    <Link
      {...{
        ...anchorProps,
        href,
        as,
        replace,
        scroll,
        shallow,
        prefetch,
        locale,
      }}
    >
      <Anchor {...anchorProps}>{children}</Anchor>
    </Link>
  );
};

export default LinkTo;
