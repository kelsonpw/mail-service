import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const data = {
    body: request.body,
    query: request.query,
  };
  console.log(JSON.stringify({ data }));
  response.status(200).json(data);
}
