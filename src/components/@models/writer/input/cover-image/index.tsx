import { useFormContext } from "react-hook-form";

import ImageInput from "@Commons/atom/input/ImageInput";
import { WRITER_INPUT_TYPE } from "@Constants/input";
import ImagePreView from "@Models/writer/input/cover-image/ImagePreview";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const CoverImage = () => {
  const { register } = useFormContext<WriterFormTypes>();

  return (
    <div>
      <ImageInput
        register={register}
        inputName={WRITER_INPUT_TYPE.THUMBNAIL_URL}
        id="image"
      />
      <ImagePreView />
    </div>
  );
};

export default CoverImage;
