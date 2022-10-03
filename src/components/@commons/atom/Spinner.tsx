import { ImSpinner3 } from "react-icons/im";

import TailwindSize from "@Models/interface/fontSize";

interface SpinnerProps {
  size?: TailwindSize;
}
const Spinner = ({ size = "base" }: SpinnerProps) => {
  return (
    <ImSpinner3
      className={`animate-spin text-neutral-800 dark:text-neutral-50 text-${size}`}
    />
  );
};
export default Spinner;
