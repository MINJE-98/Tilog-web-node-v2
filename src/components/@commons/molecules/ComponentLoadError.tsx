import { FallbackProps } from "react-error-boundary";

import Button from "@Commons/atom/button";
import Heading from "@Commons/atom/heading";
import Paragraph from "@Commons/atom/paragraph";

const ComponentLoadError = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 m-auto w-fit bg-neutral-100 dark:bg-neutral-800">
      <Heading level={4}>{error.name}</Heading>
      <Paragraph>{error.message}</Paragraph>
      <div className="mt-10 w-36">
        <Button
          size="small"
          color="primary"
          type="button"
          onClick={resetErrorBoundary}
        >
          다시 로드하기
        </Button>
      </div>
    </div>
  );
};
export default ComponentLoadError;
