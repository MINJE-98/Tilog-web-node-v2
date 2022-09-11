import Link from "@tiptap/extension-link";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { useFormContext } from "react-hook-form";

import { WRITER_INPUT_TYPE } from "@Constants/input";
import safeJsonParser from "@Utility/safeJsonParse";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

const useTiptapEditor = () => {
  const { setValue, getValues } = useFormContext<CreatePostRequestBodyDto>();
  return useEditor({
    extensions: [StarterKit, Link],

    editable: true,
    content: safeJsonParser(getValues("markdownContent")),
    onUpdate(props) {
      const updatedContent = JSON.stringify(props.editor.getJSON());
      setValue(WRITER_INPUT_TYPE.MARKDOWN_CONTENT, updatedContent);
    },
    editorProps: {
      attributes: {
        class:
          "w-full h-full prose scrollbar-hide prose-p:text-neutral-800 dark:prose-p:text-neutral-50 max-w-none dark:prose-invert focus:outline-none overflow-y-auto prose-img:ml-auto prose-img:mr-auto prose-img:border prose-img:border-gray-200 dark:text-white text-natural-700 dark:prose-img:border-gray-700",
      },
    },
  });
};
export default useTiptapEditor;
