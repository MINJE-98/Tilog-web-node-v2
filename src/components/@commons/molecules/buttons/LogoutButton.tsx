import Anchor from "@Commons/atom/anchor";

interface LogoutButtonProps {
  children: string;
  onClick: () => void;
}

const LogoutButton = ({ children, onClick }: LogoutButtonProps) => {
  return (
    <button tw="block px-4 py-2" type="button" onClick={onClick}>
      <Anchor>{children}</Anchor>
    </button>
  );
};
export default LogoutButton;
