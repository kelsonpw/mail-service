export async function POST(request: Request) {
  const data = await request.json();

  const url = data.SubscribeURL;
  console.log({ url });
  await fetch(url);

  return new Response(url, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
