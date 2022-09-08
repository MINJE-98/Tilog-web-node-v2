import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import AuthRepository from "@Api/auth/authRepository";
import validateToken from "@Api/auth/validateTokenDecorator";

import { ExceptionInterface } from "@Api/exception/interface";

export default class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly axios: AxiosInstance
  ) {}
  @validateToken()
  deleteRefreshToken(
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    const result = this.authRepository.deleteRefreshToken({
      ...options,
      withCredentials: true,
    });
    this.axios.defaults.headers.common.Authorization = "";
    return result;
  }

  async getAccessTokenUsingRefreshToken(
    userAgent?: string,
    options?: AxiosRequestConfig<ExceptionInterface>
  ): Promise<void> {
    const { data } = await this.authRepository.getAccessTokenUsingRefreshToken(
      userAgent,
      {
        ...options,
        withCredentials: true,
      }
    );
    this.axios.defaults.headers.common.Authorization = `bearer ${data.accessToken}`;
  }
}
