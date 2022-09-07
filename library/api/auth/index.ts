import AuthRepository from "@Api/auth/authRepository";
import AuthService from "@Api/auth/authService";
import { tilogApi } from "@Api/http-client";

const authRepository = new AuthRepository({
  axios: tilogApi.http,
  basePath: process.env.TILOG_API,
});
const authService = new AuthService(authRepository, tilogApi.http);

export default authService;
