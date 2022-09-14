import CategoryRepository from "@Api/category/categoryRepository";
import CategoryService from "@Api/category/categoryService";
import { tilogApi, tilogApiConfig } from "@Api/http-client";

const categoryRepository = new CategoryRepository({
  axios: tilogApi.axios,
  configuration: tilogApiConfig,
});
const categoryService = new CategoryService(categoryRepository);

export default categoryService;
