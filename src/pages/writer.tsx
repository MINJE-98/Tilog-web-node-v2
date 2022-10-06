import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import WriterForm from "@Models/writer/WriterForm";

const WriterPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>새로운 글 작성</title>
        <link
          rel="stylesheet"
          href="//unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/tokyo-night-dark.min.css"
        />
        <script
          async
          src="//unpkg.com/@highlightjs/cdn-assets@11.6.0/highlight.min.js"
        />
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
