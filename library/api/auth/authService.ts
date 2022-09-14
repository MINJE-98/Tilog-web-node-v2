import { AxiosInstance, AxiosRequestConfig } from "axios";

import AuthRepository from "@Api/auth/authRepository";
import validateToken from "@Api/auth/validateTokenDecorator";

import { ExceptionInterface } from "@Api/exception/interface";

export default class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly axios: AxiosInstance
  ) {}
  @validateToken()
  deleteRefreshToken(options?: AxiosRequestConfig<ExceptionInterface>) {
    const result = this.authRepository.usersAuthControllerDeleteRefreshToken({
      ...options,
      withCredentials: true,
    });
    this.axios.defaults.headers.common.Authorization = "";
    return result;
  }

  async getAccessTokenUsingRefreshToken(
    options?: AxiosRequestConfig<ExceptionInterface>
  ) {
    const { data } =
      await this.authRepository.usersAuthControllerGetAccessTokenUsingRefreshToken(
        undefined,
        {
          ...options,
          withCredentials: true,
        }
      );
    this.axios.defaults.headers.common.Authorization = `bearer ${data.accessToken}`;
  }
}
