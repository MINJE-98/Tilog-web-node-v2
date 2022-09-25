import { useRouter } from "next/router";

import { DateScope } from "@Api/post/interface/dateScope";

const useDateScopeRouter = (): DateScope => {
  const { dateScope } = useRouter().query;
  switch (dateScope) {
    case "Daily":
      return "Daily";
    case "Weekly":
      return "Weekly";
    case "Monthly":
      return "Monthly";
    default:
      return "All";
  }
};

export default useDateScopeRouter;
