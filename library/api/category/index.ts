import CategoryRepository from "@Api/category/categoryRepository";
import CategoryService from "@Api/category/categoryService";
import { tilogApi } from "@Api/http-client";

const categoryRepository = new CategoryRepository({
  axios: tilogApi.http,
  basePath: process.env.TILOG_API,
});
const categoryService = new CategoryService(categoryRepository);

export default categoryService;
