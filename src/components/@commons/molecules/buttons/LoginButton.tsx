import Button from "@Commons/atom/button";
import GithubIcon from "@Commons/atom/icons/GithubIcon";
import Paragraph from "@Commons/atom/paragraph";
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
      <Paragraph color="black" fontSize="medium" tw="text-neutral-50">
        {GITHUB_LOGIN}
      </Paragraph>
    </Button>
  );
};
export default LoginButton;
