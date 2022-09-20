import { FallbackProps } from "react-error-boundary";

import PrimaryButton from "@Commons/atom/buttons/PrimaryButton";

const ComponentLoadError = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 m-auto w-fit bg-neutral-100 dark:bg-neutral-800">
      <h4>{error.name}</h4>
      <p>{error.message}</p>
      <div className="mt-10 w-36">
        <PrimaryButton type="button" onClick={resetErrorBoundary}>
          다시 로드하기
        </PrimaryButton>
      </div>
    </div>
  );
};
export default ComponentLoadError;
