import { UseFormSetValue } from "react-hook-form";

import SecondaryButton from "@Commons/atom/buttons/SecondaryButton";
import { PUBLISH_PRIVATE_POST } from "@Constants/button";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

interface PrivateSubmitProps {
  setValue: UseFormSetValue<WriterFormTypes>;
}

const PrivateSubmit = ({ setValue }: PrivateSubmitProps) => {
  return (
    <SecondaryButton
      type="submit"
      onClick={() => setValue(WRITER_INPUT_TYPE.IS_PRIVATE, true)}
    >
      {PUBLISH_PRIVATE_POST}
    </SecondaryButton>
  );
};

export default PrivateSubmit;
