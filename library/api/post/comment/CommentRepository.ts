import { CommentApi } from "@til-log.lab/tilog-api";

import ApiConfig from "@Api/interface/apiConfig";

export default class CommentRepository extends CommentApi {
  constructor(apiConfig: ApiConfig) {
    super(apiConfig.configuration, undefined, apiConfig.axios);
  }
}
