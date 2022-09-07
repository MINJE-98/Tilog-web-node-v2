import { useFormContext } from "react-hook-form";

import TextInput from "@Commons/atom/input/TextInput";
import titleRules from "@Components/writer/input/rules/titleRules";
import { TITLE, TITLE_PLACEHOLDER } from "@Constants/writer";

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
      rules={titleRules("ko")}
      inputName={TITLE}
      errorMessage={errorMessage}
      fontSize="text-2xl md:text-4xl"
      placeholder={TITLE_PLACEHOLDER.ko}
    />
  );
};

export default TitleInput;
