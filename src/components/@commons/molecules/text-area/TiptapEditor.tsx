import { EditorContent, EditorOptions } from "@tiptap/react";

import { useFormContext } from "react-hook-form";

import useTiptapEditor from "@Commons/molecules/text-area/hooks/useTiptapEditor";
import { WRITER_INPUT_TYPE } from "@Constants/input";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

interface TiptapEditorProps {
  content?: EditorOptions["content"];
}

const TiptapEditor = ({ content = null }: TiptapEditorProps) => {
  const { register } = useFormContext<CreatePostRequestBodyDto>();
  const tiptapEditor = useTiptapEditor(content);
  if (!tiptapEditor) return null;

  return (
    <EditorContent
      {...register(WRITER_INPUT_TYPE.MARKDOWN_CONTENT, {
        required: true,
      })}
      className="z-0 h-[1000px] p-5 bg-white dark:bg-neutral-800"
      editor={tiptapEditor}
    />
  );
};

export default TiptapEditor;
