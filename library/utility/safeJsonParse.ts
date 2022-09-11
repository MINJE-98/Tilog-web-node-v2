const safeJsonParser = (data: string | null) => {
  if (!data) return "";
  return JSON.parse(data);
};

export default safeJsonParser;
