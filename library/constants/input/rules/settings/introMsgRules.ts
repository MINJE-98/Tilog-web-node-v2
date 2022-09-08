import { MAX_LENGTH, MIN_LENGTH } from "@Constants/messages/error";

export const INTRO_MSG_RULES = {
  minLength: {
    value: 10,
    message: MIN_LENGTH(10),
  },
  maxLength: {
    value: 190,
    message: MAX_LENGTH(190),
  },
} as const;
