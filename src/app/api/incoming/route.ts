export async function POST(request: Request) {
  const data = await request.json();

  const email = Buffer.from(data.Message, "base64").toString("utf8");
  console.log(email);
  // At this point, email is the raw content of the email
  // You can parse and store this data in the database and associate with the user

  return new Response(email, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
