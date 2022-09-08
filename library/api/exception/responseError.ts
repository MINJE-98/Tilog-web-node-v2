import { NO_MESSAGE } from "@Constants/messages/error";

import {
  ExceptionInterface,
  ServerExceptionInterface,
} from "@Api/exception/interface";

export default class ResponseError implements ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message?: string;

  constructor(errorObject: ServerExceptionInterface) {
    this.statusCode = errorObject.statusCode;
    this.requestLocation = errorObject.requestLocation;

    if (!errorObject.message.ko) {
      this.message = errorObject.message.en;
    }
    if (!errorObject.message) {
      this.message = NO_MESSAGE;
    }
  }
}
