import { useFormContext } from "react-hook-form";

import ImageInput from "@Commons/atom/input/ImageInput";
import ImagePreView from "@Components/writer/input/cover-image/ImagePreview";
import { WRITER_INPUT_TYPE } from "@Constants/input";

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
