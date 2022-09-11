import { useMutation } from "react-query";

import api from "@Library/api";

import { ModifyPostRequestBodyDto } from "@til-log.lab/tilog-api";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

const useUpdatePostMutation = () => {
  return useMutation((formData: WriterFormTypes) => {
    const postData: ModifyPostRequestBodyDto = {
      ...formData,
      categoryId: formData.categoryId,
    };
    return api.postService.modifyPost(postData);
  });
};

export default useUpdatePostMutation;
