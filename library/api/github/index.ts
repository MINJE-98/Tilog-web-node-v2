import RepoService from "@Api/github/repo/repoService";
import StatsService from "@Api/github/stats/statsService";
import { githubApi } from "@Api/http-client";

const repoService = new RepoService(githubApi.http);
const statsService = new StatsService(githubApi.http);

export { repoService, statsService };
