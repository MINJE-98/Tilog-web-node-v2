import { useFormContext } from "react-hook-form";

import SecondaryButton from "@Commons/atom/buttons/SecondaryButton";
import { PUBLISH_PRIVATE_POST } from "@Constants/button";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const PrivateSubmit = () => {
  const { setValue } = useFormContext<CreatePostRequestBodyDto>();
  const handleSubmit = () => {
    setValue(WRITER_INPUT_TYPE.IS_PRIVATE, true);
  };
  return (
    <SecondaryButton type="submit" onClick={handleSubmit}>
      {PUBLISH_PRIVATE_POST}
    </SecondaryButton>
  );
};

export default PrivateSubmit;
