import { AxiosInstance } from "axios";

import { Configuration } from "@til-log.lab/tilog-api";

export default interface ApiConfig {
  configuration?: Configuration;
  basePath?: string;
  axios: AxiosInstance;
}
