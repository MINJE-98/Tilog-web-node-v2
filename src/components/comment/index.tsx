import Image from "next/image";

import { AiOutlineComment } from "react-icons/ai";

import CardTitle from "@Commons/molecules/title/CardTitle";
import LoginButton from "@Components/auth/LoginButton";
import CommentInput from "@Components/comment/input/CommentInput";
import RootComment from "@Components/comment/render/RootComment";
import { INPUT } from "@Constants/button";
import { COMMENT_PLACEHOLDER } from "@Constants/text/placeholder";
import { useAuth } from "@Contexts/auth/AuthContext";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetParentComment from "@Queries/comments/useGetParentComment";

import image from "../../../public/asset/sleeping.png";
import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface CommentProps {
  postId: GetPostDetailResponseDto["id"];
}

const Comment = ({ postId }: CommentProps) => {
  const commentList = useGetParentComment(postId);
  const { userInfo } = useAuth();
  if (!commentList.data) return null;
  return (
    <section className="mt-5">
      <CardTitle
        Icon={
          <h6>
            <AiOutlineComment />
          </h6>
        }
        cardTitle={<h6>댓글</h6>}
      />
      {commentList.data.list.map((comment) => {
        return <RootComment key={comment.id} comment={comment} />;
      })}
      {commentList.data.list.length === 0 && (
        <div className="flex items-center justify-center py-5 space-x-10">
          <Image src={image} width={100} height={100} />
          <div className="text-center">
            <h4>작성된 댓글이 없어요.</h4>
            {!userInfo ? (
              <div className="mt-5 w-fit">
                <p>👇로그인해서 댓글을 작성해보세요!👇</p>
                <LoginButton />
              </div>
            ) : (
              <p>게시글에 댓글을 작성해보세요!</p>
            )}
          </div>
        </div>
      )}
      <CommentInput
        postId={postId}
        replyTo={null}
        placeholder={COMMENT_PLACEHOLDER}
        buttonText={INPUT}
      />
    </section>
  );
};
export default withSuspenseAndErrorBoundary(Comment);
