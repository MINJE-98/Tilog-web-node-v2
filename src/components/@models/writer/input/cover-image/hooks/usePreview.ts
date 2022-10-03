import { useEffect, useState } from "react";

import { useFormContext } from "react-hook-form";

import { WRITER_INPUT_TYPE } from "@Constants/input";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const usePreview = () => {
  const { watch, setValue } = useFormContext<CreatePostRequestBodyDto>();
  const [preview, setPreview] = useState("");
  const thumbnail = watch(WRITER_INPUT_TYPE.THUMBNAIL_URL);

  useEffect(() => {
    if (thumbnail && thumbnail.length > 0) {
      const file = thumbnail[0] as any;
      setPreview(URL.createObjectURL(file));
    }
    setValue(WRITER_INPUT_TYPE.THUMBNAIL_URL, "");
  }, [setValue, thumbnail]);
  const resetPreview = () => {
    setValue(WRITER_INPUT_TYPE.THUMBNAIL_URL, "");
    setPreview("");
  };
  return { preview, resetPreview };
};

export default usePreview;
