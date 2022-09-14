import { AxiosRequestConfig } from "axios";

import { PostApi } from "@til-log.lab/tilog-api";

import RepositoryConfig from "@Api/interface/repositoryConfig";

export default class PostRepository extends PostApi {
  constructor(readonly repositoryConfig: RepositoryConfig) {
    super(repositoryConfig.configuration, undefined, repositoryConfig.axios);
  }
  postsControllerDeletePost(postId: string, options?: AxiosRequestConfig) {
    return this.repositoryConfig.axios.delete(
      `${this.repositoryConfig.basePath}/posts`,
      {
        data: {
          postId,
        },
        ...options,
      }
    );
  }
}
