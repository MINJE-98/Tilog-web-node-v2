import { MAX_LENGTH } from "@Constants/messages/error";

export const TITLE_RULES = {
  required: true,
  maxLength: {
    value: 50,
    message: MAX_LENGTH(50),
  },
};
