import dynamic from "next/dynamic";

import { useForm } from "react-hook-form";

import useHandleEditSummit from "@Hooks/useHandleEditSummit";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const WriteFormProvider = dynamic(
  () => import("@Models/writer/WriteFormProvider")
);

const EditorForm = ({ post }: { post: GetPostDetailResponseDto }) => {
  const method = useForm<WriterFormTypes>({
    defaultValues: {
      postId: post.id,
      subTitle: post.subTitle,
      thumbnailUrl: post.thumbnailUrl,
      markdownContent: post.content,
      category: post.category,
      title: post.title,
    },
  });
  const onSubmit = useHandleEditSummit();
  return <WriteFormProvider method={method} onSubmit={onSubmit} />;
};

export default EditorForm;
