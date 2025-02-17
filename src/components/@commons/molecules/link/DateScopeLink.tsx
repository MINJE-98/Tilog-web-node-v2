import { useRouter } from "next/router";

import LinkTo from "@Commons/atom/LinkTo";
import queryString from "@Utility/queryString";

import { DateScope } from "@Api/post/interface/dateScope";

const DateScopeLink = ({ dateScope }: { dateScope: DateScope }) => {
  const router = useRouter();
  if (dateScope === "All" && !router.query.dateScope) {
    return (
      <LinkTo
        scroll={false}
        href={queryString(router.asPath, "dateScope", dateScope)}
        className="p-2 text-base font-semibold hover:no-underline text-neutral-800 dark:text-neutral-400"
      >
        {dateScope}
      </LinkTo>
    );
  }
  if (router.query.dateScope !== dateScope) {
    return (
      <LinkTo
        scroll={false}
        href={{
          pathname: router.pathname,
          query: { ...router.query, dateScope },
        }}
        className="p-2 text-base font-semibold hover:no-underline text-neutral-400 dark:text-neutral-50"
      >
        {dateScope}
      </LinkTo>
    );
  }
  return (
    <LinkTo
      scroll={false}
      href={queryString(router.asPath, "dateScope", dateScope)}
      className="p-2 text-base font-semibold hover:no-underline text-neutral-800 dark:text-neutral-400"
    >
      {dateScope}
    </LinkTo>
  );
};
export default DateScopeLink;
