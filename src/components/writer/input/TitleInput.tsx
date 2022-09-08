import { useFormContext } from "react-hook-form";

import TextInput from "@Commons/atom/input/TextInput";
import { TITLE_RULES, WRITER_INPUT_TYPE } from "@Constants/input";
import { WRITER_PLACEHOLDER } from "@Constants/text";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

const TitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WriterFormTypes>();
  const errorMessage = !errors.title ? "" : errors.title.message;

  return (
    <TextInput
      register={register}
      rules={TITLE_RULES}
      inputType={WRITER_INPUT_TYPE.TITLE}
      errorMessage={errorMessage}
      fontSize="text-2xl md:text-4xl"
      placeholder={WRITER_PLACEHOLDER.TITLE}
    />
  );
};

export default TitleInput;
