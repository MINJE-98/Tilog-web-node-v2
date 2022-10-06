import dynamic from "next/dynamic";

import { useForm } from "react-hook-form";

import useHandleWriterSummit from "@Hooks/useHandleWriterSummit";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const WriteFormProvider = dynamic(
  () => import("@Models/writer/WriteFormProvider")
);

const WriterForm = () => {
  const method = useForm<WriterFormTypes>();
  const onSubmit = useHandleWriterSummit();
  return <WriteFormProvider method={method} onSubmit={onSubmit} />;
};

export default WriterForm;
