import { ReactElement } from "react";

import * as BS from "react-icons/bs";
import * as SI from "react-icons/si";

interface TechIconsInterface {
  [techName: string]: ReactElement;
}

const TechIcons: TechIconsInterface = {
  JAVASCRIPT: <SI.SiJavascript className="inline text-Javascript" />,
  TYPESCRIPT: <SI.SiTypescript className="inline text-Typescript" />,
  HTML: <SI.SiHtml5 className="inline text-HTML" />,
  NESTJS: <SI.SiNestjs className="inline text-Nestjs" />,
  REACT: <SI.SiReact className="inline text-React" />,
  CSS: <SI.SiCss3 className="inline text-CSS" />,
  INFRA: (
    <BS.BsFillHddNetworkFill className="inline text-neutral-800 dark:text-neutral-50" />
  ),
  PYTHON: <SI.SiPython className="inline text-Python" />,
  JAVA: <SI.SiJava className="inline text-Java" />,
  GO: <SI.SiGo className="inline text-Go" />,
  CPP: <SI.SiCplusplus className="inline text-Cpp" />,
  C: <SI.SiC className="inline text-C" />,
  CSHARP: <SI.SiCsharp className="inline text-Csharp" />,
  RUST: <SI.SiRust className="inline text-Rust" />,
  SHELL: <SI.SiShell className="inline text-Shell" />,
  KOTLIN: <SI.SiKotlin className="inline text-Kotlin" />,
  RUBY: <SI.SiRuby className="inline text-Ruby" />,
  PHP: <SI.SiPhp className="inline text-PHP" />,
  SCALA: <SI.SiScala className="inline text-Scala" />,
  SOLIDITY: <SI.SiSolidity className="inline text-Ruby" />,
  UNKNOWN: <BS.BsFillPatchQuestionFill className="inline" />,
};
export default TechIcons;
