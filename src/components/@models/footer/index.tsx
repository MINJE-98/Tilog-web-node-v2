import GithubIcon from "@Commons/atom/icons/GithubIcon";
import LogoIcon from "@Commons/atom/icons/LogoIcon";
import WorldIcon from "@Commons/atom/icons/WorldIcon";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="flex w-full m-auto max-w-[1280px] px-10 py-5 items-center">
        <LogoIcon />
        <p className="ml-4 text-xs">© 2022 TILog, Inc.</p>
        <nav className="flex ml-auto space-x-5 text-xl">
          <a
            href="https://github.com/MINJE-98/Tilog-web-node-v2"
            rel="noreferrer"
            target="_blank"
          >
            <WorldIcon />
          </a>
          <a
            href="https://github.com/TIL-Log-lab"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
