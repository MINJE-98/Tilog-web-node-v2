import { SiGithub } from "react-icons/si";

import PrimaryButton from "@Components/@commons/atom/buttons/PrimaryButton";
import { GITHUB_LOGIN } from "@Constants/button";
import { useAuth } from "@Contexts/auth/AuthContext";

const LoginButton = () => {
  const { handleLogin } = useAuth();
  return (
    <PrimaryButton
      className="flex items-center justify-center py-3 space-x-3"
      type="button"
      onClick={handleLogin}
    >
      <SiGithub className="inline w-5 h-5 text-white" />
      <span className="text-neutral-50">{GITHUB_LOGIN}</span>
    </PrimaryButton>
  );
};
export default LoginButton;
