import { InputHTMLAttributes } from "react";

import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface ImageInputProps<InputType extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  inputName: Path<InputType>;
  register: UseFormRegister<InputType>;
}
const ImageInput = <InputType extends FieldValues>({
  register,
  inputName,
  id = "fileInput",
}: ImageInputProps<InputType>) => {
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
