import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await request.json();

  console.log({ data, h: 1 });

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const data = await request.json();

  console.log({ data, h: 1 });

  return NextResponse.json({ data });
}
