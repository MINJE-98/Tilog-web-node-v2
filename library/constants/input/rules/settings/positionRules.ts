import { MAX_LENGTH, MIN_LENGTH } from "@Constants/messages/error";

export const POSITION_RULES = {
  minLength: {
    value: 2,
    message: MIN_LENGTH(2),
  },
  maxLength: {
    value: 190,
    message: MAX_LENGTH(190),
  },
} as const;
