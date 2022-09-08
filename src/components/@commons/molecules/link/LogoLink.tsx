import LogoIcon from "@Commons/atom/icons/LogoIcon";
import LinkTo from "@Commons/atom/LinkTo";

const LogoLink = () => {
  return (
    <LinkTo href="/" className="hover:no-underline">
      <LogoIcon />
    </LinkTo>
  );
};
export default LogoLink;
