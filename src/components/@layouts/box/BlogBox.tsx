import { HTMLAttributes } from "react";

interface BlogBoxProps extends HTMLAttributes<HTMLDivElement> {}

const BlogBox = ({ children }: BlogBoxProps) => (
  <div className="flex flex-col justify-center p-3 md:space-x-5 md:justify-between md:flex-row">
    {children}
  </div>
);

export default BlogBox;
