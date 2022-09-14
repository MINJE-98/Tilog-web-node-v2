import { UserApi } from "@til-log.lab/tilog-api";

import { Users } from "@Api/interface/model";
import RepositoryConfig from "@Api/interface/repositoryConfig";

// NOTE: 백엔드측에서 ID추가 해줘야함.
declare module "@til-log.lab/tilog-api" {
  interface GetUserProfileResponseDto {
    id: Users["id"];
  }
}
export default class UserRepository extends UserApi {
  constructor(repositoryConfig: RepositoryConfig) {
    super(repositoryConfig.configuration, undefined, repositoryConfig.axios);
  }
}
