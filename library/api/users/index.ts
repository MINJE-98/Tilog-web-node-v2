import { tilogApi } from "@Api/http-client";
import UserRepository from "@Api/users/userRepository";
import UserService from "@Api/users/userService";

const userRepository = new UserRepository({
  axios: tilogApi.http,
  basePath: process.env.TILOG_API,
});
const usersService = new UserService(userRepository);

export default usersService;
