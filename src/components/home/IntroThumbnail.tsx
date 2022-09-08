import { useContext } from "react";

import PrimaryButton from "@Commons/atom/buttons/PrimaryButton";
import LinkTo from "@Commons/atom/LinkTo";
import LoginButton from "@Commons/molecules/buttons/LoginButton";
import { GITHUB_LOGIN } from "@Constants/button";
import { HOME_INTRO, HOME_STATUS } from "@Constants/text";
import { AuthContext } from "@Contexts/auth/AuthContext";

const IntroThumbnail = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <div className="w-full px-3 py-60 bg-neutral-900 dark:bg-neutral-800 ">
      <div className="m-auto max-w-[1280px]">
        <h1 className="text-6xl font-semibold text-neutral-300 ">
          {HOME_INTRO.TITLE}
        </h1>
        <div className="pt-3">
          <h3 className="font-semibold text-neutral-300 ">
            {HOME_INTRO.SUBTITLE}
          </h3>
        </div>
        <div className="mt-10">
          {!userInfo ? (
            <div>
              <div>
                <p>{HOME_STATUS.GUEST}</p>
              </div>
              <div className="mt-5 w-fit">
                <LoginButton />
              </div>
            </div>
          ) : (
            <div>
              <p>{HOME_STATUS.USER}</p>
              <div className="mt-2">
                <LinkTo href="/writer">
                  <PrimaryButton className="w-48">
                    <h3 className="text-xl font-semibold text-neutral-50">
                      {GITHUB_LOGIN}
                    </h3>
                  </PrimaryButton>
                </LinkTo>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroThumbnail;
