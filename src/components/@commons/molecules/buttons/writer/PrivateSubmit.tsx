import { UseFormSetValue } from "react-hook-form";

import Button from "@Commons/atom/button";
import { PUBLISH_PRIVATE_POST } from "@Constants/button";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

interface PrivateSubmitProps {
  setValue: UseFormSetValue<WriterFormTypes>;
}

const PrivateSubmit = ({ setValue }: PrivateSubmitProps) => {
  return (
    <Button
      size="small"
      color="secondary"
      type="submit"
      onClick={() => setValue(WRITER_INPUT_TYPE.IS_PRIVATE, true)}
    >
      {PUBLISH_PRIVATE_POST}
    </Button>
  );
};

export default PrivateSubmit;
