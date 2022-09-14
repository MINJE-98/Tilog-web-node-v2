import { AxiosInstance, AxiosResponse } from "axios";

import { ExceptionInterface } from "@Api/exception/interface";
import GithubRequest from "@Api/github/interface/githubRequest";
import TopLanguageResponse from "@Api/github/interface/topLanguageResponse";
import UserStatsResponse from "@Api/github/interface/userStatsResponse";

export default class StatsService {
  constructor(readonly axios: AxiosInstance) {}
  getUserStats(
    userName: GithubRequest["userName"]
  ): Promise<AxiosResponse<UserStatsResponse, ExceptionInterface>> {
    return this.axios.get(`/stats/${userName}`);
  }
  getTopLanguage(
    userName: GithubRequest["userName"]
  ): Promise<AxiosResponse<TopLanguageResponse[], ExceptionInterface>> {
    return this.axios.get(`/stats/${userName}/top-language`);
  }
}
