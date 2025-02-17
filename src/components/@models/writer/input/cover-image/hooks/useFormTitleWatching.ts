import { useFormContext } from "react-hook-form";

import { WRITER_INPUT_TYPE } from "@Constants/input";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const useFormTitleWatching = () => {
  const { watch } = useFormContext<WriterFormTypes>();
  return watch(WRITER_INPUT_TYPE.TITLE);
};
export default useFormTitleWatching;
