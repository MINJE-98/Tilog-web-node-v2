import { useRouter } from "next/router";

import GetPostRequestDto from "@Api/post/interface/getPostRequestDto";

const useDateScopeRouter = (): GetPostRequestDto["dateScope"] => {
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
