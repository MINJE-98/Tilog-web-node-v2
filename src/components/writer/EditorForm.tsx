import { useForm } from "react-hook-form";

import WriteFormProvider from "@Components/writer/WriteFormProvider";
import useHandleEditSummit from "@Hooks/useHandleEditSummit";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const EditorForm = ({ post }: { post: GetPostDetailResponseDto }) => {
  const method = useForm<WriterFormTypes>({
    defaultValues: {
      postId: post.id,
      subTitle: post.subTitle,
      thumbnailUrl: post.thumbnailUrl,
      markdownContent: post.content,
      categoryId: post.category.categoryId,
      title: post.title,
    },
  });
  const onSubmit = useHandleEditSummit();
  return <WriteFormProvider method={method} onSubmit={onSubmit} />;
};

export default EditorForm;
