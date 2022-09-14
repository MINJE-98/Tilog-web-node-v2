import { AuthApi } from "@til-log.lab/tilog-api";

import RepositoryConfig from "@Api/interface/repositoryConfig";

export default class AuthRepository extends AuthApi {
  constructor(repositoryConfig: RepositoryConfig) {
    super(repositoryConfig.configuration, undefined, repositoryConfig.axios);
  }
}
