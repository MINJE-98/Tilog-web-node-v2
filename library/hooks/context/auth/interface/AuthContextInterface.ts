import GetMeResponseTransFormSettingsDto from "@Api/users/interface/getMeResponseTransFormSettingsDto";
import SetUserInfoType from "@Contexts/auth/interface/setUserInfoType";

export default interface AuthContextInterface {
  userInfo: GetMeResponseTransFormSettingsDto | null;
  setUserInfo: SetUserInfoType;
  handleLogin: () => Window | null;
  handleLogout: () => Promise<void> | null;
}
