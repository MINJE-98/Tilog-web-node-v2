import PrimaryButton from "@Commons/atom/buttons/PrimaryButton";
import LinkTo from "@Commons/atom/LinkTo";
import { WRITE } from "@Constants/button";
import { HOME_INTRO, HOME_STATUS } from "@Constants/text";
import { useAuth } from "@Contexts/auth/AuthContext";
import LoginButton from "@Models/auth/LoginButton";

const IntroThumbnail = () => {
  const { userInfo } = useAuth();
  return (
    <div className="w-full px-3 py-32 md:py-60 bg-neutral-900 dark:bg-neutral-800 ">
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
            <>
              <p>{HOME_STATUS.GUEST}</p>
              <div className="mt-5 w-fit">
                <LoginButton />
              </div>
            </>
          ) : (
            <>
              <p>{HOME_STATUS.USER}</p>
              <div className="mt-2">
                <LinkTo href="/writer">
                  <PrimaryButton type="submit" className="w-48">
                    <h3 className="text-lg font-semibold text-neutral-50">
                      {WRITE}
                    </h3>
                  </PrimaryButton>
                </LinkTo>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroThumbnail;
