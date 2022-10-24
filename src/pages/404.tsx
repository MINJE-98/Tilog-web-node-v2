import { NextPage } from "next";

import Heading from "@Commons/atom/heading";
import Paragraph from "@Commons/atom/paragraph";
import RootBox from "@Layouts/box/RootBox";

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <RootBox>
        <article className="text-center">
          <header>
            <Heading level={1}>404</Heading>
          </header>
          <Paragraph fontSize="medium">페이지를 찾을 수 없습니다.</Paragraph>
        </article>
      </RootBox>
    </div>
  );
};

export default NotFoundPage;
