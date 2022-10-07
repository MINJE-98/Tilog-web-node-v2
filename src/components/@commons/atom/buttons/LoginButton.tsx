import PrimaryButton from "@Commons/atom/buttons/PrimaryButton";
import GithubIcon from "@Commons/atom/icons/GithubIcon";
import { GITHUB_LOGIN } from "@Constants/button";

const LoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <PrimaryButton
      className="flex items-center justify-center py-3 space-x-3"
      type="button"
      onClick={onClick}
    >
      <GithubIcon className="inline fill-white" />
      <span className="text-neutral-50">{GITHUB_LOGIN}</span>
    </PrimaryButton>
  );
};
export default LoginButton;
