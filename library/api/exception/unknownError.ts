import { UNKNOWN_LOCATION } from "@Api/exception/constant/requestLocation";
import { INTERNAL_SERVER_ERROR } from "@Api/exception/constant/statusCode";
import { ExceptionFilter } from "@Api/exception/exceptionFilter";
import { NETWORK_ERROR } from "@Constants/messages/error";

export default class UnknownError extends ExceptionFilter {
  constructor() {
    super({
      statusCode: INTERNAL_SERVER_ERROR,
      requestLocation: UNKNOWN_LOCATION,
      message: NETWORK_ERROR,
    });
  }
}
