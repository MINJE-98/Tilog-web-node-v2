/* eslint-disable func-names */
/* eslint-disable no-param-reassign */

import http from "@Api";
import { tilogApi } from "@Api/http-client";
import getAccessTokenToAxiosHeader from "@Api/utility/getAccessTokenToAxiosHeader";
import isTokenExpired from "@Api/utility/isTokenExpired";

export default function validateToken() {
  return (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originMethod = descriptor.value;
    descriptor.value = async function (...args: unknown[]) {
      const accessToken = getAccessTokenToAxiosHeader(tilogApi.http);

      if (!accessToken || isTokenExpired(accessToken)) {
        await http.authService.getAccessTokenUsingRefreshToken();
      }
      return originMethod.apply(this, args);
    };
  };
}
