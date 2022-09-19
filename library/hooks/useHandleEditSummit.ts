import { useRouter } from "next/router";

import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import useUpdatePostMutation from "@Mutations/posts/useUpdatePostMutation";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const useHandleEditSummit = (): SubmitHandler<WriterFormTypes> => {
  const router = useRouter();
  const { mutate } = useUpdatePostMutation();
  return async (object) => {
    mutate(object, {
      onError: (error) => {
        if (error instanceof Error) toast.error(error.message);
      },
      onSuccess(_data, variables) {
        router.push(`post/${variables.postId}`);
      },
    });
  };
};

export default useHandleEditSummit;
