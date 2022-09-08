import { NO_MESSAGE } from "@Constants/messages/error";

import ExceptionInterface from "@Api/exception/interface";

export default class ResponseError implements ExceptionInterface {
  readonly statusCode: number;
  readonly requestLocation: string;
  readonly message: string;

  constructor(errorObject: ExceptionInterface) {
    this.statusCode = errorObject.statusCode;
    this.requestLocation = errorObject.requestLocation;
    this.message = errorObject.message;

    if (!this.message) {
      this.message = NO_MESSAGE;
    }
  }
}
