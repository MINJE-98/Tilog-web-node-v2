import { ReactElement } from "react";

import { BsQuestionCircleFill } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";
import { GrServerCluster } from "react-icons/gr";
import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiGo,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiKotlin,
  SiNestjs,
  SiPhp,
  SiPython,
  SiReact,
  SiRuby,
  SiRust,
  SiScala,
  SiShell,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface TechIconsInterface {
  [techName: string]: ReactElement;
}

const TechIcons: TechIconsInterface = {
  JAVASCRIPT: <SiJavascript className="inline text-Javascript" />,
  TYPESCRIPT: <SiTypescript className="inline text-Typescript" />,
  HTML: <SiHtml5 className="inline text-HTML" />,
  NESTJS: <SiNestjs className="inline text-Nestjs" />,
  REACT: <SiReact className="inline text-React" />,
  CSS: <SiCss3 className="inline text-CSS" />,
  INFRA: <GrServerCluster className="inline text-neutral-50" />,
  PYTHON: <SiPython className="inline text-Python" />,
  JAVA: <SiJava className="inline text-Java" />,
  GO: <SiGo className="inline text-Go" />,
  CPP: <SiCplusplus className="inline text-Cpp" />,
  C: <SiC className="inline text-C" />,
  CSHARP: <SiCsharp className="inline text-Csharp" />,
  RUST: <SiRust className="inline text-Rust" />,
  SHELL: <SiShell className="inline text-Shell" />,
  KOTLIN: <SiKotlin className="inline text-Kotlin" />,
  RUBY: <SiRuby className="inline text-Ruby" />,
  PHP: <SiPhp className="inline text-PHP" />,
  SCALA: <SiScala className="inline text-Scala" />,
  SOLIDITY: <SiSolidity className="inline text-Ruby" />,
  NEXTJS: <TbBrandNextjs className="inline text-neutral-50" />,
  BOOKSTUDY: <GiBookCover className="inline text-neutral-50" />,
  TIL: <>✍🏼</>,
  UNKNOWN: <BsQuestionCircleFill className="inline text-neutral-50" />,
};
export default TechIcons;
