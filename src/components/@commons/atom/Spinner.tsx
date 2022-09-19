import { ImSpinner8 } from "react-icons/im";

import TailwindSize from "@Components/interface/fontSize";

interface SpinnerProps {
  size?: TailwindSize;
}
const Spinner = ({ size = "base" }: SpinnerProps) => {
  return (
    <ImSpinner8
      className={`animate-spin text-neutral-800 dark:text-neutral-50 text-${size}`}
    />
  );
};
export default Spinner;
