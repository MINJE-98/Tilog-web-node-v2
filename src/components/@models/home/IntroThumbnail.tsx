import Button from "@Commons/atom/button";
import Heading from "@Commons/atom/heading";
import LinkTo from "@Commons/atom/LinkTo";
import Paragraph from "@Commons/atom/paragraph";
import LoginButton from "@Commons/molecules/buttons/LoginButton";
import { WRITE } from "@Constants/button";
import { HOME_INTRO, HOME_STATUS } from "@Constants/text";
import { useAuth } from "@Contexts/auth/AuthContext";

const IntroThumbnail = () => {
  const { userInfo, handleLogin } = useAuth();
  return (
    <div tw="w-full px-3 py-32 md:py-60 bg-neutral-900 dark:bg-neutral-800 ">
      <div tw="m-auto max-w-[1280px]">
        <Heading level={1} tw="text-4xl md:text-6xl text-neutral-300 ">
          {HOME_INTRO.TITLE}
        </Heading>
        <div tw="pt-3">
          <Heading level={3} tw="text-neutral-300 ">
            {HOME_INTRO.SUBTITLE}
          </Heading>
        </div>
        <div tw="mt-10">
          {!userInfo ? (
            <>
              <Paragraph>{HOME_STATUS.GUEST}</Paragraph>
              <div tw="mt-5">
                <LoginButton onClick={handleLogin} />
              </div>
            </>
          ) : (
            <>
              <Paragraph>{HOME_STATUS.USER}</Paragraph>
              <div tw="mt-2">
                <LinkTo href="/writer">
                  <Button color="primary" size="small" type="submit" tw="w-48">
                    {WRITE}
                  </Button>
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
