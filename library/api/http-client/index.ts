import HttpClient from "@Library/api/http-client/HttpClient";

const tilogApi = new HttpClient({});

const githubApi = new HttpClient({});

export { tilogApi, githubApi };
