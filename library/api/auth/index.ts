import AuthRepository from "@Api/auth/authRepository";
import AuthService from "@Api/auth/authService";
import { tilogApi, tilogApiConfig } from "@Api/http-client";

const authRepository = new AuthRepository({
  axios: tilogApi.axios,
  configuration: tilogApiConfig,
});
const authService = new AuthService(authRepository, tilogApi.axios);

export default authService;
