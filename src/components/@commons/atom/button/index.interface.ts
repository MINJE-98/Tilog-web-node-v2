import { ButtonHTMLAttributes } from "react";

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "large" | "medium" | "small";
  color: "primary" | "secondary";
}
