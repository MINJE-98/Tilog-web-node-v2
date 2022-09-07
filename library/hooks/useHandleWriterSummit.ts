import { SubmitHandler } from "react-hook-form";

import useSetPostMutation from "@Mutations/posts/useSetPostMutation";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

// TODO: Toast
const useHandleSummit = (): SubmitHandler<WriterFormTypes> => {
  const mutation = useSetPostMutation();
  return async (object) => {
    mutation.mutate(object);
  };
};

export default useHandleSummit;
