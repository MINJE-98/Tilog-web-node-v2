import { ButtonHTMLAttributes, MouseEventHandler } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  scroll: MouseEventHandler<HTMLButtonElement>;
  arrow: "right" | "left";
  isIntersecting?: boolean;
}

const ArrowButton = ({
  isIntersecting = false,
  scroll,
  arrow,
  className,
}: ArrowButtonProps) => {
  return (
    <button
      className={`${
        isIntersecting ? "hidden" : ""
      } ${className} absolute p-3 border rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 bg-neutral-50 border-neutral-300 dark:bg-neutral-800`}
      type="button"
      onClick={scroll}
    >
      {arrow === "right" && (
        <AiOutlineRight className="text-xl text-neutral-500 hover:text-neutral-600" />
      )}
      {arrow === "left" && (
        <AiOutlineLeft className="text-xl text-neutral-500 hover:text-neutral-600" />
      )}
    </button>
  );
};
export default ArrowButton;
