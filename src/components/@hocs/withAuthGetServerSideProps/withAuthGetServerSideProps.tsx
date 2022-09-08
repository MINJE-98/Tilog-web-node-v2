import { GetServerSidePropsContext, Redirect } from "next";

import { tilogApi } from "@Api/http-client";
import api from "@Api/index";

import IncomingGSSPInterface from "@HOCS/withAuthGetServerSideProps/interface/IncomingGSSPInterface";
import WithAuthServerSidePropsResult from "@HOCS/withAuthGetServerSideProps/interface/WithAuthServerSidePropsResult";

export default function withAuthServerSideProps(
  incomingGSSP?: IncomingGSSPInterface<WithAuthServerSidePropsResult> | null,
  redirect?: Redirect
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<WithAuthServerSidePropsResult> => {
    const { cookies } = ctx.req;
    if (tilogApi.http.defaults.headers.common.Authorization) {
      tilogApi.http.defaults.headers.common.Authorization = "";
    }
    // Note: Guest
    if (!cookies.refreshToken) {
      if (incomingGSSP) {
        const incomingGSSPResult = await incomingGSSP(ctx);

        if ("props" in incomingGSSPResult) {
          return { props: { ...incomingGSSPResult.props } };
        }
        if ("notFound" in incomingGSSPResult) {
          return { notFound: incomingGSSPResult.notFound };
        }
      }
      if (redirect) {
        return { redirect };
      }
      return { props: {} };
    }

    // Note: User
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
