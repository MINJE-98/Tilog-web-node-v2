import Button from "@Commons/atom/button";
import GithubIcon from "@Commons/atom/icons/GithubIcon";
import { GITHUB_LOGIN } from "@Constants/button";

const LoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      size="small"
      color="primary"
      tw="flex items-center justify-center py-3 space-x-3"
      type="button"
      onClick={onClick}
    >
      <GithubIcon className="inline fill-white" />
      <span className="text-neutral-50">{GITHUB_LOGIN}</span>
    </Button>
  );
};
export default LoginButton;
