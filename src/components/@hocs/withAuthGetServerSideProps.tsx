import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  Redirect,
} from "next";

import { tilogApi } from "@Api/http-client";
import api from "@Api/index";

import GetMeResponseTransFormSettingsDto from "@Api/users/interface/getMeResponseTransFormSettingsDto";

type IncomingGSSP<P> = (
  ctx: GetServerSidePropsContext,
  user: GetMeResponseTransFormSettingsDto
) => Promise<P>;

type WithAuthServerSidePropsResult = GetServerSidePropsResult<{
  [key: string]: any;
}>;

export default function withAuthServerSideProps(
  incomingGSSP?: IncomingGSSP<WithAuthServerSidePropsResult> | null,
  redirect?: Redirect
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<WithAuthServerSidePropsResult> => {
    const { cookies } = ctx.req;
    if (tilogApi.http.defaults.headers.common.Authorization) {
      tilogApi.http.defaults.headers.common.Authorization = "";
    }

    if (!cookies.refreshToken) {
      return redirect ? { redirect } : { props: {} };
    }
    const { headers } = ctx.req;
    const userAgent = !headers["user-agent"] ? "" : headers["user-agent"];
    const cookie = !headers.cookie ? "" : headers.cookie;
    try {
      await api.authService.getAccessTokenUsingRefreshToken(undefined, {
        headers: {
          "User-Agent": userAgent,
          Cookie: cookie,
        },
      });
      const initUserInfo = await api.usersService.getMe({
        headers: {
          "User-Agent": userAgent,
          Cookie: cookie,
        },
      });

      if (incomingGSSP) {
        const incomingGSSPResult = await incomingGSSP(ctx, initUserInfo);

        if ("props" in incomingGSSPResult) {
          return { props: { ...incomingGSSPResult.props, initUserInfo } };
        }

        if ("redirect" in incomingGSSPResult) {
          return { redirect: { ...incomingGSSPResult.redirect } };
        }

        if ("notFound" in incomingGSSPResult) {
          return { notFound: incomingGSSPResult.notFound };
        }
      }
      return {
        props: {
          initUserInfo,
        },
      };
    } catch (error) {
      return {
        props: {},
      };
    }
  };
}
