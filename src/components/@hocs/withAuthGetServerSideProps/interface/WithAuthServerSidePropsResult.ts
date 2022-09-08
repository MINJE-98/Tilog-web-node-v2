import { GetServerSidePropsResult } from "next";

type WithAuthServerSidePropsResult = GetServerSidePropsResult<{
  [key: string]: any;
}>;

export default WithAuthServerSidePropsResult;
