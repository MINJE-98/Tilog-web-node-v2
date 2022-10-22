interface LogoutButtonProps {
  children: string;
  onClick: () => void;
}

const LogoutButton = ({ children, onClick }: LogoutButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      <span tw="block px-4 py-2 text-lg text-gray-700 cursor-pointer hover:underline">
        {children}
      </span>
    </button>
  );
};
export default LogoutButton;
