import { useFormContext } from "react-hook-form";

import ImageInput from "@Commons/atom/input/ImageInput";
import ImagePreView from "@Components/writer/input/cover-image/ImagePreview";
import { THUMBNAIL_URL } from "@Constants/writer";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

const CoverImage = () => {
  const { register } = useFormContext<WriterFormTypes>();

  return (
    <div>
      <ImageInput register={register} inputName={THUMBNAIL_URL} id="image" />
      <ImagePreView />
    </div>
  );
};

export default CoverImage;
