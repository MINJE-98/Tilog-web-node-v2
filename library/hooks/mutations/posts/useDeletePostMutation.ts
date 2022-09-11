import { useRouter } from "next/router";

import toast from "react-hot-toast";
import { useMutation } from "react-query";

import api from "@Library/api";

const useDeletePostMutation = () => {
  const router = useRouter();
  return useMutation((postId: string) => api.postService.deletePost(postId), {
    onError: (error) => {
      if (error instanceof Error) toast.error(error.message);
    },
    onSuccess() {
      router.push("/");
    },
  });
};

export default useDeletePostMutation;
