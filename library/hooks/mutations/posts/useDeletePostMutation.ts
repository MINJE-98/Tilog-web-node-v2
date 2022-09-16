import { useRouter } from "next/router";

import toast from "react-hot-toast";
import { useMutation } from "react-query";

import api from "@Api";

import { Posts } from "@Api/interface/model";

const useDeletePostMutation = () => {
  const router = useRouter();
  return useMutation(
    (postId: Posts["id"]) => api.postService.deletePost(postId),
    {
      onError: (error) => {
        if (error instanceof Error) toast.error(error.message);
      },
      onSuccess() {
        router.push("/");
      },
    }
  );
};

export default useDeletePostMutation;
