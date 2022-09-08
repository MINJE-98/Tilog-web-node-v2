import { GetServerSidePropsContext } from "next";

import GetMeResponseTransFormSettingsDto from "@Api/users/interface/getMeResponseTransFormSettingsDto";

type IncomingGSSP<P> = (
  ctx: GetServerSidePropsContext,
  user?: GetMeResponseTransFormSettingsDto
) => Promise<P>;

export default IncomingGSSP;
