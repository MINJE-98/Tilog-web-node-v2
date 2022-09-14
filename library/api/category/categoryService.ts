import { AxiosRequestConfig } from "axios";

import CategoryRepository from "@Api/category/categoryRepository";

import { Category } from "@Api/interface/model";

export default class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  getCategories(
    categoryName?: Category["categoryName"],
    options?: AxiosRequestConfig
  ) {
    return this.categoryRepository.categoriesControllerGetCategories(
      categoryName,
      options
    );
  }

  async getCategory(
    categoryName: Category["categoryName"],
    options?: AxiosRequestConfig
  ) {
    const { data } =
      await this.categoryRepository.categoriesControllerGetCategories(
        categoryName,
        options
      );
    return data.list[0];
  }

  getUsersCategories(userId: Category["id"], options?: AxiosRequestConfig) {
    return this.categoryRepository.categoriesControllerGetUsersCategories(
      userId,
      options
    );
  }
}
