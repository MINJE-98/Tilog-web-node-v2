import { tilogApi, tilogApiConfig } from "@Api/http-client";
import UserRepository from "@Api/users/userRepository";
import UserService from "@Api/users/userService";

const userRepository = new UserRepository({
  axios: tilogApi.axios,
  configuration: tilogApiConfig,
});
const usersService = new UserService(userRepository);

export default usersService;
