import { AxiosInstance, AxiosResponse } from "axios";

import { ExceptionInterface } from "@Api/exception/interface";
import GithubRequest from "@Api/github/interface/githubRequest";
import TopLanguageResponse from "@Api/github/interface/topLanguageResponse";
import UserStatsResponse from "@Api/github/interface/userStatsResponse";

export default class StatsService {
  constructor(private readonly axios: AxiosInstance) {}
  getUserStats(
    userName: GithubRequest["userName"]
  ): Promise<AxiosResponse<UserStatsResponse, ExceptionInterface>> {
    return this.axios.get(`/stats/${userName}`);
  }
  async getTopLanguage(
    userName: GithubRequest["userName"]
  ): Promise<AxiosResponse<TopLanguageResponse[], ExceptionInterface>> {
    const response = await this.axios.get<
      unknown,
      AxiosResponse<TopLanguageResponse[], ExceptionInterface>
    >(`/stats/${userName}/top-language`);
    const totalSize = Object.keys(response.data)
      .map((_v, idx) => response.data[idx].size)
      .reduce((acc, prev) => acc + prev, 0);

    Object.keys(response.data).forEach((_v, idx) => {
      response.data[idx].percent = (
        (response.data[idx].size / totalSize) *
        100
      ).toFixed(0);
    });
    return response;
  }
}
