import { Configuration } from "@til-log.lab/tilog-api";

import HttpClient from "./httpClient";

const tilogApi = new HttpClient({});
const tilogApiConfig = new Configuration({
  basePath: process.env.TILOG_API,
});

const githubApi = new HttpClient({
  baseURL: process.env.TILOG_GITHUB_STATS_API,
});

export { tilogApi, tilogApiConfig, githubApi };
