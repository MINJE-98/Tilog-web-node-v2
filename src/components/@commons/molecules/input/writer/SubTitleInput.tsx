import { useFormContext } from "react-hook-form";

import TextInput from "@Commons/atom/input";
import { SUBTITLE_RULES, WRITER_INPUT_TYPE } from "@Constants/input";
import { WRITER_PLACEHOLDER } from "@Constants/text";

const SubTitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <TextInput
      type="default"
      fontSize="medium"
      formObject={{
        inputType: WRITER_INPUT_TYPE.SUBTITLE,
        register,
        rules: SUBTITLE_RULES,
        errors,
      }}
      placeholder={WRITER_PLACEHOLDER.SUBTITLE}
    />
  );
};

export default SubTitleInput;
