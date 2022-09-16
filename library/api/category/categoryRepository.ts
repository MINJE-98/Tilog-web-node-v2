import { CategoryApi } from "@til-log.lab/tilog-api";

import ApiConfig from "@Api/interface/apiConfig";

export default class CategoryRepository extends CategoryApi {
  constructor(apiConfig: ApiConfig) {
    super(apiConfig.configuration, undefined, apiConfig.axios);
  }
}
