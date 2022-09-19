import LogoLink from "@Commons/molecules/link/LogoLink";
import HeaderUserProfile from "@Components/header/profile/HeaderUserProfile";

const Header = () => {
  return (
    <header>
      <div className="flex m-auto max-w-[1280px] h-20 items-center px-5">
        <LogoLink />
        <div className="ml-auto shrink-0">
          <HeaderUserProfile />
        </div>
      </div>
      <hr className="m-auto" />
    </header>
  );
};
export default Header;
