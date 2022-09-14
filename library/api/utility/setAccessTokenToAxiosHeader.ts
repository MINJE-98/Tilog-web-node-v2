import { tilogApi } from "@Api/http-client";

import { GetAccessTokenUsingRefreshTokenResponse } from "@til-log.lab/tilog-api";

export default function setAccessTokenToAxiosHeader(
  accessToken: GetAccessTokenUsingRefreshTokenResponse["accessToken"]
) {
  tilogApi.axios.defaults.headers.common.Authorization = `bearer ${accessToken}`;
}
