import { useForm } from "react-hook-form";

import WriteFormProvider from "@Components/writer/WriteFormProvider";
import useHandleWriterSummit from "@Hooks/useHandleWriterSummit";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const WriterForm = () => {
  const method = useForm<WriterFormTypes>();
  const onSubmit = useHandleWriterSummit();
  return <WriteFormProvider method={method} onSubmit={onSubmit} />;
};

export default WriterForm;
