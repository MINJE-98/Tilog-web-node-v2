/** 버튼 타입은 상위 컴포넌트에서 결정합니다. */
/* eslint-disable react/button-has-type */

import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton = ({
  children,
  className,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={`${className} py-2.5 px-6 rounded-md w-full h-fit text-neutral-50 bg-neutral-800 dark:bg-black hover:bg-neutral-700`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
