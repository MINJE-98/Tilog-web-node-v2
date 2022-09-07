import { InputHTMLAttributes } from "react";

import { Path, UseFormRegister } from "react-hook-form";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: Path<WriterFormTypes>;
  register: UseFormRegister<WriterFormTypes>;
}
const ImageInput = ({
  register,
  inputName,
  id = "fileInput",
}: ImageInputProps) => {
  return (
    <input
      id={id}
      type="file"
      className="hidden"
      accept="image/*"
      {...register(inputName)}
    />
  );
};

export default ImageInput;
