import LinkTo from "@Commons/atom/LinkTo";

const More = ({ href }: { href: string }) => {
  return (
    <LinkTo href={`/${href}`}>
      <p className="hover:text-neutral-800 dark:hover:text-neutral-50">
        더보기
      </p>
    </LinkTo>
  );
};
export default More;
