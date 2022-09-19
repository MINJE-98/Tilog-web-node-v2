import { useFormContext } from "react-hook-form";

import PrimaryButton from "@Commons/atom/buttons/PrimaryButton";
import { PUBLISH_POST } from "@Constants/button";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const PublicSubmit = () => {
  const { setValue } = useFormContext<CreatePostRequestBodyDto>();
  const handleSubmit = () => {
    setValue(WRITER_INPUT_TYPE.IS_PRIVATE, false);
  };
  return (
    <PrimaryButton type="submit" onClick={handleSubmit}>
      {PUBLISH_POST}
    </PrimaryButton>
  );
};

export default PublicSubmit;
