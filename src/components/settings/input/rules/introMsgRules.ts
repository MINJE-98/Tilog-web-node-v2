import { RegisterOptions } from "react-hook-form";

import { MAX_LENGTH, MIN_LENGTH } from "@Constants/input/rules";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";
import { LanguageUnionType } from "@Language/interface";

const emailRules = (
  language: LanguageUnionType
): RegisterOptions<UserSettingTypes> => {
  return {
    minLength: {
      value: 10,
      message: MIN_LENGTH(10, language),
    },
    maxLength: {
      value: 190,
      message: MAX_LENGTH(190, language),
    },
  };
};

export default emailRules;
