import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

import api from "@Api";
import { commentQueryKeys } from "@Utility/queryKey";

import { CreateCommentsRequestBodyDto } from "@til-log.lab/tilog-api";

import DeleteParentCommentMutation from "@Mutations/comments/interface/deleteParentCommentMutation";
import UpdateParentCommentMutation from "@Mutations/comments/interface/updateParentCommentMutation";

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ commentId }: DeleteParentCommentMutation) =>
      api.commentService.deleteComment({
        commentId,
      }),
    {
      onError: (error) => {
        if (error instanceof Error) toast.error(error.message);
      },
      onSuccess(_data, variables) {
        return variables.replyTo === "null"
          ? queryClient.refetchQueries(
              commentQueryKeys.commentParent(variables.postId)
            )
          : queryClient.refetchQueries(
              commentQueryKeys.commentChild(variables.postId, variables.replyTo)
            );
      },
    }
  );
};

export const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ commentId, content }: UpdateParentCommentMutation) =>
      api.commentService.updateComment({
        commentId,
        content,
      }),
    {
      onSuccess(_data, variables) {
        return variables.replyTo === "null"
          ? queryClient.refetchQueries(
              commentQueryKeys.commentParent(variables.postId)
            )
          : queryClient.refetchQueries(
              commentQueryKeys.commentChild(variables.postId, variables.replyTo)
            );
      },
    }
  );
};

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ content, postId, replyTo }: CreateCommentsRequestBodyDto) =>
      api.commentService.createComment({ content, postId, replyTo }),
    {
      onSuccess(_data, variables) {
        return variables.replyTo === null
          ? queryClient.refetchQueries(
              commentQueryKeys.commentParent(variables.postId)
            )
          : queryClient.refetchQueries(
              commentQueryKeys.commentChild(variables.postId, variables.replyTo)
            );
      },
    }
  );
};
