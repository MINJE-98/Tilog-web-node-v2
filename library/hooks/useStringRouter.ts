import { useRouter } from "next/router";

const useStringRouter = (target: string) => {
  const targetQuery = useRouter().query[target];
  if (!targetQuery) return "";
  if (Array.isArray(targetQuery)) return "";
  return targetQuery;
};

export default useStringRouter;
