import { useFormContext } from "react-hook-form";

import TextInput from "@Commons/atom/input";
import { TITLE_RULES, WRITER_INPUT_TYPE } from "@Constants/input";
import { WRITER_PLACEHOLDER } from "@Constants/text";

const TitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextInput
      type="default"
      fontSize="large"
      formObject={{
        inputType: WRITER_INPUT_TYPE.TITLE,
        register,
        rules: TITLE_RULES,
        errors,
      }}
      placeholder={WRITER_PLACEHOLDER.TITLE}
    />
  );
};

export default TitleInput;
