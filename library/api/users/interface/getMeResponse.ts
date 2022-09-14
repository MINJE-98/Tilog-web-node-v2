import { GetMeResponseDto } from "@til-log.lab/tilog-api";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

export default interface GetMeResponse {
  id: GetMeResponseDto["userId"];
  avatar: GetMeResponseDto["avatar"];
  name: GetMeResponseDto["name"];
  createdAt: GetMeResponseDto["createdAt"];
  settings: UserSettingTypes;
}
