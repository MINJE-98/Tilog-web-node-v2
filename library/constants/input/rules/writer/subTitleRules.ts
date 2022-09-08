import { MAX_LENGTH } from "@Constants/messages/error";

export const SUBTITLE_RULES = {
  required: true,
  maxLength: {
    value: 190,
    message: MAX_LENGTH(190),
  },
};
