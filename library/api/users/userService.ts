import { AxiosRequestConfig } from "axios";

import validateToken from "@Api/auth/validateTokenDecorator";
import UserRepository from "@Api/users/userRepository";
import userArraySettingsTransformObjectSettings from "@Api/utility/userArraySettingsTransformObjectSettings";

import { SetSettingRequestBodyDto } from "@til-log.lab/tilog-api";

import { Users } from "@Api/interface/model";
import GetMeResponse from "@Api/users/interface/getMeResponse";
import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

export default class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  @validateToken()
  async getMe(options?: AxiosRequestConfig) {
    const {
      data: { userId: id, avatar, name, createdAt, settings },
    } = await this.userRepository.usersControllerGetMe(options);

    const getMeResponse: GetMeResponse = {
      id,
      avatar,
      name,
      createdAt,
      settings: userArraySettingsTransformObjectSettings(settings),
    };
    return getMeResponse;
  }

  async getUserProfile(
    userName: Users["userName"] | any,
    options?: AxiosRequestConfig
  ) {
    const {
      data: { id, avatar, name, createdAt, settings },
    } = await this.userRepository.usersControllerGetUserProfile(
      userName,
      options
    );

    const getUserProfileResponse: GetUserProfileResponse = {
      id,
      avatar,
      name,
      createdAt,
      settings: userArraySettingsTransformObjectSettings(settings),
    };
    return getUserProfileResponse;
  }

  @validateToken()
  setSetting(
    setSettingResponse: SetSettingRequestBodyDto,
    options?: AxiosRequestConfig
  ) {
    return this.userRepository.usersControllerSetSetting(
      setSettingResponse,
      options
    );
  }
}
