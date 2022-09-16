import { AuthApi } from "@til-log.lab/tilog-api";

import ApiConfig from "@Api/interface/apiConfig";

export default class AuthRepository extends AuthApi {
  constructor(apiConfig: ApiConfig) {
    super(apiConfig.configuration, undefined, apiConfig.axios);
  }
}
