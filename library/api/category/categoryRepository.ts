import { CategoryApi } from "@til-log.lab/tilog-api";

import RepositoryConfig from "@Api/interface/repositoryConfig";

export default class CategoryRepository extends CategoryApi {
  constructor(repositoryConfig: RepositoryConfig) {
    super(repositoryConfig.configuration, undefined, repositoryConfig.axios);
  }
}
