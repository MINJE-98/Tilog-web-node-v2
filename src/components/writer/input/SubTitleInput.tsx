import { useFormContext } from "react-hook-form";

import TextInput from "@Commons/atom/input/TextInput";
import { SUBTITLE_RULES, WRITER_INPUT_TYPE } from "@Constants/input";
import { WRITER_PLACEHOLDER } from "@Constants/text";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

const SubTitleInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WriterFormTypes>();

  const errorMessage = !errors.subTitle ? "" : errors.subTitle.message;

  return (
    <TextInput
      register={register}
      rules={SUBTITLE_RULES}
      inputType={WRITER_INPUT_TYPE.SUBTITLE}
      errorMessage={errorMessage}
      fontSize="text-xl md:text-2xl"
      placeholder={WRITER_PLACEHOLDER.SUBTITLE}
    />
  );
};

export default SubTitleInput;
