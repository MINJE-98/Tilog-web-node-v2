import { NO_MESSAGE } from "@Constants/messages/error";

import { ExceptionInterface } from "@Api/exception/interface";

export class ExceptionFilter extends Error {
  constructor(error: ExceptionInterface) {
    if (!error.message) {
      super(NO_MESSAGE.ko);
    } else if (!error.message.ko) {
      super(error.message.en);
    } else {
      super(error.message.ko);
    }
    this.name = error.statusCode.toString();
  }
}
