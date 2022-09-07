import { REQUEST_LOCATION } from "@Api/exception/constant/requestLocation";
import { INTERNAL_SERVER_ERROR } from "@Api/exception/constant/statusCode";
import { NETWORK_ERROR_MESSAGE } from "@Constants/messages/error";

import ExceptionInterface from "@Api/exception/interface";
import { LanguageInterface } from "@Language/interface";

export default class RequestError implements ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: LanguageInterface;

  constructor() {
    this.statusCode = INTERNAL_SERVER_ERROR;
    this.requestLocation = REQUEST_LOCATION;
    this.message = NETWORK_ERROR_MESSAGE;
  }
}
