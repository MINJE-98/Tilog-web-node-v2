import { NextPage } from "next";

import Header from "@Commons/organisms/header";
import RootBox from "@Layouts/box/RootBox";

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Header />
      <RootBox>
        <article className="text-center">
          <header>
            <h1>404</h1>
          </header>
          <p>페이지를 찾을 수 없습니다.</p>
        </article>
      </RootBox>
    </div>
  );
};

export default NotFoundPage;
