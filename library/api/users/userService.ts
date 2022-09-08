import { AxiosRequestConfig } from "axios";

import validateToken from "@Api/auth/validateTokenDecorator";
import UserRepository from "@Api/users/userRepository";
import userSettingsTransformObjectSettings from "@Api/utility/userSettingsTransformObjectSettings";

import {
  SetSettingRequestBodyDto,
  SetSettingRequestBodyDtoSettingTypeEnum,
} from "@til-log.lab/tilog-api";

import GetMeResponseTransFormSettingsDto from "@Api/users/interface/getMeResponseTransFormSettingsDto";
import GetUserProfileResponseTransFormSettingsDto from "@Api/users/interface/getUserProfileResponseTransFormSettingsDto";

export default class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getMe(
    options?: AxiosRequestConfig<unknown>
  ): Promise<GetMeResponseTransFormSettingsDto> {
    const { data } = await this.userRepository.getMe(options);
    const newResponse: GetMeResponseTransFormSettingsDto = {
      id: data.userId,
      avatar: data.avatar,
      name: data.name,
      createdAt: data.createdAt,
      settings: userSettingsTransformObjectSettings(data.settings),
    };
    return newResponse;
  }

  // TODO: UserName을 전달 받게 변경되어야합니다. -> Backend 스팩이 변경되어야합니다!
  async getUserProfile(
    userId: number,
    options?: AxiosRequestConfig<unknown>
  ): Promise<GetUserProfileResponseTransFormSettingsDto> {
    const { data } = await this.userRepository.getUserProfile(userId, options);
    const newResponse: GetUserProfileResponseTransFormSettingsDto = {
      avatar: data.avatar,
      name: data.name,
      createdAt: data.createdAt,
      settings: userSettingsTransformObjectSettings(data.settings),
    };
    return newResponse;
  }

  @validateToken()
  async setSetting(
    content: string | null,
    settingType: SetSettingRequestBodyDtoSettingTypeEnum,
    options?: AxiosRequestConfig<unknown>
  ): Promise<void> {
    const setSettingRequestBodyDto: SetSettingRequestBodyDto = {
      content,
      settingType,
    };
    await this.userRepository.setSetting(setSettingRequestBodyDto, options);
  }
}
