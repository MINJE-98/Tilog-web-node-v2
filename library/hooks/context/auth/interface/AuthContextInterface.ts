import GetMeResponse from "@Api/users/interface/getMeResponse";
import SetUserInfoType from "@Contexts/auth/interface/setUserInfoType";

export default interface AuthContextInterface {
  userInfo: GetMeResponse | null;
  setUserInfo: SetUserInfoType;
  handleLogin: () => void;
  handleLogout: () => void;
}
