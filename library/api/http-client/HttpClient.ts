import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import RequestError from "@Api/exception/requestError";
import ResponseError from "@Api/exception/responseError";
import UnknownError from "@Api/exception/unknownError";

export default class HttpClient {
  public axios: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.axios = axios.create(config);
    this.interceptors();
  }
  private interceptors = () => {
    this.axios.interceptors.response.use(
      (response) => response,
      (error) => this.interceptorError(error)
    );
  };

  private interceptorError = (error: AxiosError) => {
    // NOTE: 서버에서 응답한 상태
    if (error.response) {
      const { data } = error.response;
      return Promise.reject(new ResponseError(data));
    }

    // NOTE: 서버에서 응답하지 못한 상태
    if (error.request) {
      return Promise.reject(new RequestError());
    }

    // NOTE: 요청, 응답이 모두 이루지지 않은 상태
    return Promise.reject(new UnknownError());
  };
}
