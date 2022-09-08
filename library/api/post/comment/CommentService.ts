import { AxiosRequestConfig, AxiosResponse } from "axios";

import validateToken from "@Api/auth/validateTokenDecorator";
import CommentRepository from "@Api/post/comment/CommentRepository";

import {
  CreateCommentsRequestBodyDto,
  DeleteCommentRequestDto,
  GetCommentsResponseDto,
  UpdateCommentRequestDto,
} from "@til-log.lab/tilog-api";

import { ExceptionInterface } from "@Api/exception/interface";

export default class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  @validateToken()
  createComment(
    createCommentsRequestBodyDto: CreateCommentsRequestBodyDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    return this.commentRepository.createComment(
      createCommentsRequestBodyDto,
      options
    );
  }

  @validateToken()
  deleteComment(
    deleteCommentRequestDto: DeleteCommentRequestDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void, ExceptionInterface>> {
    return this.commentRepository.deleteComment(
      deleteCommentRequestDto,
      options
    );
  }

  getComments(
    postId: string,
    replyTo?: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<GetCommentsResponseDto, ExceptionInterface>> {
    return this.commentRepository.getComments(postId, replyTo, options);
  }

  @validateToken()
  updateComment(
    updateCommentRequestDto: UpdateCommentRequestDto,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<void>> {
    return this.commentRepository.updateComment(
      updateCommentRequestDto,
      options
    );
  }
}
