import { PostLikeApi } from "@til-log.lab/tilog-api";

import RepositoryConfig from "@Api/interface/repositoryConfig";

export default class PostLikeRepository extends PostLikeApi {
  constructor(repositoryConfig: RepositoryConfig) {
    super(repositoryConfig.configuration, undefined, repositoryConfig.axios);
  }
}
