import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { calculatorInternalApiAxios } from "@/services/api";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const headersInstance = headers();
  const authorization = headersInstance.get("authorization");

  const hasTypeVCS = true;

  const body = await request.json();
  const externalReq = await calculatorInternalApiAxios({
    method: "post",
    url: "/stripe/checkout_sessions",
    data: body,
    params: { hasTypeVCS },
    headers: { Authorization: authorization },
  }).catch((error) => {
    return error.response;
  });

  return NextResponse.json(externalReq.data);
}

export async function GET() {
  return NextResponse.json({ message: "method not allowed" });
}
