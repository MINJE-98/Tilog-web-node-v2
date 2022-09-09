import { ExceptionFilter } from "@Api/exception/exceptionFilter";

import { ExceptionInterface } from "@Api/exception/interface";

export default class ResponseError extends ExceptionFilter {
  constructor({ message, statusCode, requestLocation }: ExceptionInterface) {
    super({
      statusCode,
      requestLocation,
      message,
    });
  }
}
