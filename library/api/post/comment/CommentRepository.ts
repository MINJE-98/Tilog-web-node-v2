import { CommentApi } from "@til-log.lab/tilog-api";

import RepositoryConfig from "@Api/interface/repositoryConfig";

export default class CommentRepository extends CommentApi {
  constructor(repositoryConfig: RepositoryConfig) {
    super(repositoryConfig.configuration, undefined, repositoryConfig.axios);
  }
}
