import { UserApi } from "@til-log.lab/tilog-api";

import ApiConfig from "@Api/interface/apiConfig";
import { Users } from "@Api/interface/model";

// NOTE: 백엔드측에서 ID추가 해줘야함.
declare module "@til-log.lab/tilog-api" {
  interface GetUserProfileResponseDto {
    id: Users["id"];
  }
}
export default class UserRepository extends UserApi {
  constructor(apiConfig: ApiConfig) {
    super(apiConfig.configuration, undefined, apiConfig.axios);
  }
}
