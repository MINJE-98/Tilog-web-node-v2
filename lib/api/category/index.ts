import CategoryRepository from "@Library/api/category/categoryRepository";
import CategoryService from "@Library/api/category/categoryService";
import { tilogApi } from "@Library/api/http-client";

const categoryRepository = new CategoryRepository({
  axios: tilogApi.http,
  basePath: process.env.TILOG_API,
});
const categoryService = new CategoryService(categoryRepository);

export default categoryService;
