import { useFormContext } from "react-hook-form";

import TextInput from "@Commons/atom/input";
import { SUBTITLE_RULES, WRITER_INPUT_TYPE } from "@Constants/input";
import { WRITER_PLACEHOLDER } from "@Constants/text";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const SubTitleInput = () => {
  const { register } = useFormContext<WriterFormTypes>();

  return (
    <TextInput
      type="default"
      {...register(WRITER_INPUT_TYPE.SUBTITLE, SUBTITLE_RULES)}
      // errorMessage={errorMessage}
      fontSize="medium"
      placeholder={WRITER_PLACEHOLDER.SUBTITLE}
    />
  );
};

export default SubTitleInput;
