import { AxiosInstance, AxiosResponse } from "axios";

import { ExceptionInterface } from "@Api/exception/interface";
import GithubRequest from "@Api/github/interface/githubRequest";
import PinnedRepoResponse from "@Api/github/interface/pinnedRepoResponse";

export default class RepoService {
  constructor(private readonly axios: AxiosInstance) {}
  getPinnedRepo(
    userName: GithubRequest["userName"]
  ): Promise<AxiosResponse<PinnedRepoResponse[], ExceptionInterface>> {
    return this.axios.get(`/repo/${userName}/pinned-repositories`);
  }
}
