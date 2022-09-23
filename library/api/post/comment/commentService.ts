import { AxiosRequestConfig } from "axios";

import validateToken from "@Api/auth/validateTokenDecorator";
import CommentRepository from "@Api/post/comment/commentRepository";

import {
  CreateCommentsRequestBodyDto,
  DeleteCommentRequestDto,
  UpdateCommentRequestDto,
} from "@til-log.lab/tilog-api";

import GetCommentsRequest from "@Api/post/comment/interface/getCommentsRequest";

export default class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  @validateToken()
  createComment(
    createCommentsRequestBody: CreateCommentsRequestBodyDto,
    options?: AxiosRequestConfig
  ) {
    return this.commentRepository.commentsControllerCreateComment(
      createCommentsRequestBody,
      options
    );
  }

  @validateToken()
  deleteComment(
    deleteCommentRequest: DeleteCommentRequestDto,
    options?: AxiosRequestConfig
  ) {
    return this.commentRepository.commentsControllerDeleteComment(
      deleteCommentRequest,
      options
    );
  }

  async getComments(
    { postId, replyTo }: GetCommentsRequest,
    options?: AxiosRequestConfig
  ) {
    const { data } = await this.commentRepository.commentsControllerGetComments(
      postId,
      replyTo,
      options
    );
    return data;
  }

  @validateToken()
  updateComment(
    updateCommentRequest: UpdateCommentRequestDto,
    options?: AxiosRequestConfig
  ) {
    return this.commentRepository.commentsControllerUpdateComment(
      updateCommentRequest,
      options
    );
  }
}
