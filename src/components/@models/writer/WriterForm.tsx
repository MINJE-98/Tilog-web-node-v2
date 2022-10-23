import { useForm } from "react-hook-form";

import useHandleWriterSummit from "@Hooks/useHandleWriterSummit";
import WriteFormProvider from "@Models/writer/WriteFormProvider";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const WriterForm = () => {
  const method = useForm<WriterFormTypes>({
    defaultValues: {
      postId: "",
      subTitle: "",
      thumbnailUrl: "",
      markdownContent: "",
      title: "",
    },
  });
  const onSubmit = useHandleWriterSummit();
  return <WriteFormProvider method={method} onSubmit={onSubmit} />;
};

export default WriterForm;
