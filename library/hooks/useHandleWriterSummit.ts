import { useRouter } from "next/router";

import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import useSetPostMutation from "@Mutations/posts/useSetPostMutation";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const useHandleWriterSummit = (): SubmitHandler<WriterFormTypes> => {
  const router = useRouter();
  const { mutate } = useSetPostMutation();
  return async (object) => {
    mutate(object, {
      onError: (error) => {
        if (error instanceof Error) toast.error(error.message);
      },
      // NOTE: CreatePost Return 타입이 postID로 변경될때까지 any
      onSuccess(data: any) {
        router.push(`post/${data.data.id}`);
      },
    });
  };
};

export default useHandleWriterSummit;
