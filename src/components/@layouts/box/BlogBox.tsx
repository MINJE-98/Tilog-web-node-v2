import { HTMLAttributes } from "react";

interface BlogBoxProps extends HTMLAttributes<HTMLDivElement> {}

const BlogBox = ({ children }: BlogBoxProps) => (
  <div className="flex flex-col justify-center p-3 xl:space-x-5 xl:justify-between xl:flex-row">
    {children}
  </div>
);

export default BlogBox;
