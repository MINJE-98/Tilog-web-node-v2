import AuthRepository from "@Library/api/auth/authRepository";
import AuthService from "@Library/api/auth/authService";
import { tilogApi } from "@Library/api/http-client";

const authRepository = new AuthRepository({
  axios: tilogApi.http,
  basePath: process.env.TILOG_API,
});
const authService = new AuthService(authRepository, tilogApi.http);

export default authService;
