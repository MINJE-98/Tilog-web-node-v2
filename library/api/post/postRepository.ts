import { AxiosRequestConfig } from "axios";

import { PostApi } from "@til-log.lab/tilog-api";

import ApiConfig from "@Api/interface/apiConfig";

export default class PostRepository extends PostApi {
  constructor(readonly apiConfig: ApiConfig) {
    super(apiConfig.configuration, undefined, apiConfig.axios);
  }
  postsControllerDeletePost(postId: string, options?: AxiosRequestConfig) {
    return this.apiConfig.axios.delete(`${this.apiConfig.basePath}/posts`, {
      data: {
        postId,
      },
      ...options,
    });
  }
}
