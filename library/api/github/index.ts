import RepoService from "@Api/github/repo/repoService";
import StatsService from "@Api/github/stats/statsService";
import { githubApi } from "@Api/http-client";

const repoService = new RepoService(githubApi.axios);
const statsService = new StatsService(githubApi.axios);

export { repoService, statsService };
