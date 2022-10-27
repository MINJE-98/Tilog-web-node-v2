import Paragraph from "@Commons/atom/paragraph";

interface LogoutButtonProps {
  children: string;
  onClick: () => void;
}

const LogoutButton = ({ children, onClick }: LogoutButtonProps) => {
  return (
    <button tw="block px-4 py-2" type="button" onClick={onClick}>
      <Paragraph color="black" fontSize="medium">
        {children}
      </Paragraph>
    </button>
  );
};
export default LogoutButton;
