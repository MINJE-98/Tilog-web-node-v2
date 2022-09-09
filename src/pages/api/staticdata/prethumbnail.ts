import { NextApiRequest, NextApiResponse } from "next";

import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const directory = path.resolve("public/asset/prethumbnail.png");

  res.status(200).json(directory);
}
