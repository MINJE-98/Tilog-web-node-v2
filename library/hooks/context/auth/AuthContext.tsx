import { createContext } from "react";

import AuthContextInterface from "@Contexts/auth/interface/AuthContextInterface";

export const AuthContext = createContext<AuthContextInterface>({
  userInfo: null,
  setUserInfo: () => {},
  handleLogin: () => null,
  handleLogout: () => null,
});
