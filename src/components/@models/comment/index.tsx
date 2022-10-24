import Image from "next/image";

import { AiOutlineComment } from "react-icons/ai";

import Heading from "@Commons/atom/heading";
import Paragraph from "@Commons/atom/paragraph";
import LoginButton from "@Commons/molecules/buttons/LoginButton";
import EmptyContentsCard from "@Commons/molecules/card/EmptyContentsCard";
import CardTitle from "@Commons/molecules/title/CardTitle";
import { INPUT } from "@Constants/button";
import { COMMENT_PLACEHOLDER } from "@Constants/text/placeholder";
import { useAuth } from "@Contexts/auth/AuthContext";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import CommentInput from "@Models/comment/input/CommentInput";
import RootComment from "@Models/comment/render/RootComment";
import image from "@Public/asset/sleeping.png";
import useGetParentComment from "@Queries/comments/useGetParentComment";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface CommentProps {
  postId: GetPostDetailResponseDto["id"];
}

const Comment = ({ postId }: CommentProps) => {
  const commentList = useGetParentComment(postId);
  const { userInfo, handleLogin } = useAuth();
  if (!commentList.data) return null;
  return (
    <section className="mt-5">
      <CardTitle
        Icon={
          <Heading level={4}>
            <AiOutlineComment />
          </Heading>
        }
        cardTitle={<Heading level={4}>댓글</Heading>}
      />
      {commentList.data.list.map((comment) => {
        return <RootComment key={comment.id} comment={comment} />;
      })}
      {commentList.data.list.length === 0 && (
        <EmptyContentsCard
          Icon={
            <Image alt="emptyContents" src={image} width={100} height={100} />
          }
          title="작성된 댓글이 없어요."
          subTitle={
            !userInfo ? (
              <div className="mt-5 w-fit">
                <Paragraph fontSize="medium">
                  로그인해서 댓글을 작성해보세요!
                </Paragraph>
                <LoginButton onClick={handleLogin} />
              </div>
            ) : (
              <Paragraph fontSize="medium">
                게시글에 댓글을 작성해보세요!
              </Paragraph>
            )
          }
        />
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
