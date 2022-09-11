import { useRouter } from "next/router";

import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import useSetPostMutation from "@Mutations/posts/useSetPostMutation";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

// TODO: Toast
const useHandleSummit = (): SubmitHandler<WriterFormTypes> => {
  const router = useRouter();
  const { mutate } = useSetPostMutation();
  return async (object) => {
    mutate(object, {
      onError: (error) => {
        if (error instanceof Error) toast.error(error.message);
      },
      onSuccess(data) {
        router.push(`post/${data.data.id}`);
      },
    });
  };
};

export default useHandleSummit;
