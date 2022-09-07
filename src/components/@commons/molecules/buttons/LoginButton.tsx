import React, { useContext } from "react";

import { SiGithub } from "react-icons/si";

import PrimaryButton from "@Components/@commons/atom/buttons/PrimaryButton";
import { AuthContext } from "@Contexts/auth/AuthContext";

const LoginButton = () => {
  const { handleLogin } = useContext(AuthContext);
  return (
    <PrimaryButton
      className="flex justify-center space-x-3"
      type="button"
      onClick={handleLogin}
    >
      <SiGithub className="inline w-5 h-5 text-white" />
      <span className="text-neutral-50">Login with Github</span>
    </PrimaryButton>
  );
};
export default LoginButton;
