import { UseFormSetValue } from "react-hook-form";

import PrimaryButton from "@Commons/atom/buttons/PrimaryButton";
import { PUBLISH_POST } from "@Constants/button";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

interface PublicSubmitProps {
  setValue: UseFormSetValue<WriterFormTypes>;
}

const PublicSubmit = ({ setValue }: PublicSubmitProps) => {
  return (
    <PrimaryButton
      type="submit"
      onClick={() => setValue(WRITER_INPUT_TYPE.IS_PRIVATE, false)}
    >
      {PUBLISH_POST}
    </PrimaryButton>
  );
};

export default PublicSubmit;
