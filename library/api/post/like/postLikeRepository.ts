import { PostLikeApi } from "@til-log.lab/tilog-api";

import ApiConfig from "@Api/interface/apiConfig";

export default class PostLikeRepository extends PostLikeApi {
  constructor(apiConfig: ApiConfig) {
    super(apiConfig.configuration, undefined, apiConfig.axios);
  }
}
