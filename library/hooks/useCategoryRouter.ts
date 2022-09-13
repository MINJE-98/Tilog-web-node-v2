import { useRouter } from "next/router";

const useCategoryRouter = () => {
  const { category } = useRouter().query;
  if (!category) return "";
  if (Array.isArray(category)) return "";
  return category;
};

export default useCategoryRouter;
