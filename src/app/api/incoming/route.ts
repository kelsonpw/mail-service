import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const url = data.SubscribeURL;
  console.log({ url });
  await fetch(url);

  return NextResponse.json({ success: true });
}
