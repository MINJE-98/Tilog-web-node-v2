import { useEffect } from "react";

import api from "@Api";

import SetUserInfoType from "@Contexts/auth/interface/setUserInfoType";

const useLogin = (setUserInfo: SetUserInfoType) => {
  useEffect(() => {
    window.addEventListener(
      "message",
      async (event) => {
        if (event.origin !== window.location.origin) return;
        if (event.data === "login") {
          await api.authService.getAccessTokenUsingRefreshToken();
          const userInfo = await api.usersService.getMe();
          setUserInfo(userInfo);
        }
      },
      false
    );
  }, [setUserInfo]);
  return () => {
    return window.open(
      process.env.TILOG_AUTH,
      "",
      "toolbar=no, menubar=no, width=600, height=700"
    );
  };
};

export default useLogin;
