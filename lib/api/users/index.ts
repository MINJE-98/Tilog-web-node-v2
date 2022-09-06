import { tilogApi } from "@Library/api/http-client";
import UserRepository from "@Library/api/users/userRepository";
import UserService from "@Library/api/users/userService";

const userRepository = new UserRepository({
  axios: tilogApi.http,
  basePath: process.env.TILOG_API,
});
const usersService = new UserService(userRepository);

export default usersService;
