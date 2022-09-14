import HttpClient from "@Library/api/http-client/HttpClient";

const tilogApi = new HttpClient({});

const githubApi = new HttpClient({
  baseURL: process.env.TILOG_GITHUB_STATS_API,
});

export { tilogApi, githubApi };
