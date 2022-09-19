/** 버튼 타입은 상위 컴포넌트에서 결정합니다. */
/* eslint-disable react/button-has-type */

import { ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SecondaryButton = ({
  children,
  className,

  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      className={`${className} py-2.5 px-6 rounded-md w-full h-fit hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-50 hover:text-neutral-50`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
