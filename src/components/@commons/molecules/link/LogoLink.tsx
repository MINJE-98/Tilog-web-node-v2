import LinkTo from "@Commons/atom/LinkTo";
import { LOGO } from "@Constants/text";

const LogoLink = () => {
  return (
    <LinkTo href="/" className="hover:no-underline">
      <h2 className="font-logo-font">{LOGO}</h2>
    </LinkTo>
  );
};
export default LogoLink;
