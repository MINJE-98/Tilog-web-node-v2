import { GetServerSidePropsContext } from "next";

import GetMeResponse from "@Api/users/interface/getMeResponse";

type IncomingGSSP<P> = (
  ctx: GetServerSidePropsContext,
  user?: GetMeResponse
) => Promise<P>;

export default IncomingGSSP;
