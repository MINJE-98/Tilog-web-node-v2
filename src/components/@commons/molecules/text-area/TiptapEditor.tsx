import { EditorContent } from "@tiptap/react";

import { useFormContext } from "react-hook-form";

import useTiptapEditor from "@Commons/molecules/text-area/hooks/useTiptapEditor";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const TiptapEditor = () => {
  const { register } = useFormContext<CreatePostRequestBodyDto>();
  const tiptapEditor = useTiptapEditor();
  if (!tiptapEditor) return null;

  return (
    <EditorContent
      {...register(WRITER_INPUT_TYPE.MARKDOWN_CONTENT, {
        required: true,
      })}
      className="z-0 p-5 bg-white h-[40rem] md:h-[60rem] dark:bg-neutral-800"
      editor={tiptapEditor}
    />
  );
};

export default TiptapEditor;
