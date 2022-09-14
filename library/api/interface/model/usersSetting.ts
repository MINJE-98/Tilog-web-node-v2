import { Users } from "@Api/interface/model/users";

const settingType = {
  DISPLAY_NAME: "DISPLAY_NAME",
  INTRO_MSG: "INTRO_MSG",
  EMAIL: "EMAIL",
  POSITION: "POSITION",
};

type SettingType = typeof settingType[keyof typeof settingType];

export interface UsersSetting {
  id: number;
  userId: Users["id"];
  type: SettingType;
  content: string;
}
