import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

import Spinner from "@Commons/atom/Spinner";
import useStringRouter from "@Hooks/useStringRouter";
import RootBox from "@Layouts/box/RootBox";
import useGetPostDetail from "@Queries/posts/useGetPostDetail";

const EditorForm = dynamic(() => import("@Components/writer/EditorForm"), {
  ssr: false,
});

const EditorPage: NextPage = () => {
  const postId = useStringRouter("postId");
  const postDetail = useGetPostDetail(postId);

  return (
    <div>
      <Head>
        <title>글 수정</title>
      </Head>
      <RootBox>
        <Suspense fallback={<Spinner />}>
          {postDetail.isSuccess && <EditorForm post={postDetail.data.data} />}
        </Suspense>
      </RootBox>
    </div>
  );
};

export default EditorPage;
