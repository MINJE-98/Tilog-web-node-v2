import { GetUserProfileSettingItem } from "@til-log.lab/tilog-api";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

// NOTE: 백엔드에서 설정 데이터를 Array<GetUserProfileSettingItem>타입으로 반환하는데 순서보장이 되지 않아 객체로 다시 만들어서 프론트에서 사용합니다.
export default function userArraySettingsTransformObjectSettings(
  settings: Array<GetUserProfileSettingItem>
): UserSettingTypes {
  const initSetting: UserSettingTypes = {
    DISPLAY_NAME: null,
    INTRO_MSG: null,
    EMAIL: null,
    POSITION: null,
  };
  if (settings) {
    return settings.reduce((prevSettings, curSettings) => {
      return {
        ...prevSettings,
        [curSettings.type]: curSettings.content,
      };
    }, initSetting);
  }
  return initSetting;
}
