import { MAX_LENGTH, WRONG_EMAIL } from "@Constants/messages/error";

export const EMAIL_RULES = {
  required: true,
  pattern: {
    value:
      /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
    message: WRONG_EMAIL,
  },
  maxLength: {
    value: 190,
    message: MAX_LENGTH(190),
  },
} as const;
