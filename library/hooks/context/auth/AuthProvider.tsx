/** 현재 많은 연산을 하지 않아 굳이 memo를 할 필요가 없으므로 해당 기능 "off"합니다. */
/* eslint-disable react/jsx-no-constructed-context-values */

import { ReactNode, useEffect, useState } from "react";

import api from "@Api";
import { DEFAULT_USER_INFO } from "@Constants/user";
import { AuthContext } from "@Contexts/auth/AuthContext";
import useLogin from "@Hooks/useLogin";

import GetMeResponse from "@Api/users/interface/getMeResponse";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<GetMeResponse | null>(
    DEFAULT_USER_INFO
  );
  useEffect(() => {
    const getMe = async () => {
      try {
        const user = await api.usersService.getMe();
        setUserInfo(user);
      } catch (error) {
        setUserInfo(null);
      }
    };
    getMe();
  }, []);
  const handleLogin = useLogin(setUserInfo);
  const handleLogout = async () => {
    await api.authService.deleteRefreshToken();
    setUserInfo(null);
  };
  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
