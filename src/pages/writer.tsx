import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import WriterForm from "@Components/writer/WriterForm";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";

const WriterPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>새로운 글 작성</title>
      </Head>
      <RootBox>
        <WriterForm />
      </RootBox>
    </div>
  );
};

export default WriterPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  null,
  {
    destination: "/",
    permanent: true,
  }
);
