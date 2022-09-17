import { ReactElement } from "react";

import * as BS from "react-icons/bs";
import * as FA from "react-icons/fa";
import * as GR from "react-icons/gr";
import * as SI from "react-icons/si";

interface TechIconsInterface {
  [techName: string]: ReactElement;
}

const TechIcons: TechIconsInterface = {
  JAVASCRIPT: <SI.SiJavascript className="inline text-Javascript" />,
  TYPESCRIPT: <SI.SiTypescript className="inline text-Typescript" />,
  HTML: <SI.SiHtml5 className="inline text-HTML" />,
  GITHUB: <SI.SiGithub className="inline" />,
  NESTJS: <SI.SiNestjs className="inline text-Nestjs" />,
  REACT: <SI.SiReact className="inline text-React" />,
  SWIFT: <SI.SiSwift className="inline text-Swift" />,
  DATABASE: <FA.FaDatabase className="inline text-DB" />,
  MYSQL: <GR.GrMysql className="inline text-Mysql" />,
  AWS: <SI.SiAmazonaws className="inline text-AWS" />,
  DOCKER: <SI.SiDocker className="inline text-Docker" />,
  DOCKER_COMPOSE: <SI.SiDocker className="inline text-Docker" />,
  REDIS: <SI.SiRedis className="inline text-Redis " />,
  NODEJS: <FA.FaNodeJs className="inline text-Nodejs" />,
  CSS: <SI.SiCss3 className="inline text-CSS" />,
  INFRA: <BS.BsFillHddNetworkFill className="inline" />,
  UNKNOWN: <BS.BsFillPatchQuestionFill className="inline" />,
};
export default TechIcons;
