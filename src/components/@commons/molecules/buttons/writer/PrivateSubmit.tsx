import { UseFormSetValue } from "react-hook-form";

import SecondaryButton from "@Commons/atom/buttons/SecondaryButton";
import { PUBLISH_PRIVATE_POST } from "@Constants/button";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

interface PrivateSubmitProps {
  setValue: UseFormSetValue<CreatePostRequestBodyDto>;
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
