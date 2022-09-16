import { HTMLAttributes } from "react";

interface BlogBoxProps extends HTMLAttributes<HTMLDivElement> {}

const BlogBox = ({ children }: BlogBoxProps) => (
  <div className="grid justify-center grid-flow-row p-3 md:justify-between md:grid-flow-col">
    {children}
  </div>
);

export default BlogBox;
