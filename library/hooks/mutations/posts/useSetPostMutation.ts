import { useMutation } from "react-query";

import api from "@Library/api";

import { CreatePostRequestBodyDto } from "@til-log.lab/tilog-api";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

const useSetPostMutation = () => {
  return useMutation((formData: WriterFormTypes) => {
    const postData: CreatePostRequestBodyDto = {
      ...formData,
      categoryId: formData.categoryId,
    };
    return api.postService.createPost(postData);
  });
};

export default useSetPostMutation;
