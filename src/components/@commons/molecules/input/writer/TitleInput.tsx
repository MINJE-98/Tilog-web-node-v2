import { useFormContext } from "react-hook-form";

import TextInput from "@Commons/atom/input";
import { TITLE_RULES, WRITER_INPUT_TYPE } from "@Constants/input";
import { WRITER_PLACEHOLDER } from "@Constants/text";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const TitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WriterFormTypes>();
  const isError = !errors.title?.message;

  return (
    <TextInput
      type="default"
      isError={isError}
      {...register(WRITER_INPUT_TYPE.TITLE, TITLE_RULES)}
      fontSize="medium"
      placeholder={WRITER_PLACEHOLDER.TITLE}
    />
  );
};

export default TitleInput;
