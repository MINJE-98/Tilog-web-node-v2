import { AxiosRequestConfig, AxiosResponse } from "axios";

import CategoryRepository from "@Api/category/categoryRepository";

import {
  GetCategoriesResponseDto,
  GetUserCategoriesResponseDto,
} from "@til-log.lab/tilog-api";

import GetCategoryListInterface from "@Api/category/interface/GetCategoryListInterface";
import { ExceptionInterface } from "@Api/exception/interface";

export default class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  getCategories(
    categoryName?: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetCategoriesResponseDto, ExceptionInterface>> {
    return this.categoryRepository.getCategories(categoryName, options);
  }
  getUsersCategories(
    userId: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetUserCategoriesResponseDto, ExceptionInterface>> {
    return this.categoryRepository.getUsersCategories(userId, options);
  }

  getCategoryList({
    userId,
    options,
  }: GetCategoryListInterface): Promise<
    AxiosResponse<
      GetUserCategoriesResponseDto | GetCategoriesResponseDto,
      ExceptionInterface
    >
  > {
    if (userId) {
      return this.categoryRepository.getUsersCategories(userId, options);
    }
    return this.categoryRepository.getCategories(undefined, options);
  }
}
