import { ComponentType, Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

import Spinner from "@Commons/atom/Spinner";
import ComponentLoadError from "@Commons/molecules/ComponentLoadError";

const withSuspenseAndErrorBoundary =
  <Props extends {}>(WrappedComponent: ComponentType<Props>) =>
  (props: Props) => {
    const { reset } = useQueryErrorResetBoundary();
    return (
      <ErrorBoundary onReset={reset} fallbackRender={ComponentLoadError}>
        <Suspense fallback={<Spinner />}>
          <WrappedComponent {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };

export default withSuspenseAndErrorBoundary;
