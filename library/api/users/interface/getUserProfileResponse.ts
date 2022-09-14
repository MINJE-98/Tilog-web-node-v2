import { GetUserProfileResponseDto } from "@til-log.lab/tilog-api";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

export default interface GetUserProfileResponse {
  id: GetUserProfileResponseDto["id"];
  avatar: GetUserProfileResponseDto["avatar"];
  name: GetUserProfileResponseDto["name"];
  createdAt: GetUserProfileResponseDto["createdAt"];
  settings: UserSettingTypes;
}
