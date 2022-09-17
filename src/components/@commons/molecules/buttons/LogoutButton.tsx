import { useAuth } from "@Contexts/auth/AuthContext";

interface LogoutButtonProps {
  children: string;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const { handleLogout } = useAuth();
  return (
    <button type="button" onClick={handleLogout}>
      <span className="block px-4 py-2 text-lg text-gray-700 cursor-pointer hover:underline">
        {children}
      </span>
    </button>
  );
};
export default LogoutButton;
