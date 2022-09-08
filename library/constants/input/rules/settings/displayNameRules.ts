import { MAX_LENGTH, MIN_LENGTH } from "@Constants/messages/error";

export const DISPLAY_NAME_RULES = {
  required: true,
  minLength: {
    value: 2,
    message: MIN_LENGTH(2),
  },
  maxLength: {
    value: 190,
    message: MAX_LENGTH(190),
  },
};
