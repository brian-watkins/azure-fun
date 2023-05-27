import { NextApiRequest, NextApiResponse } from "next";
import pLimit from "p-limit";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const limit = pLimit(7)
  res.status(200).json({ message: 'Hello from my fun azure app!' });
}