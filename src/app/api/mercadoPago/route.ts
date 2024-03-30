import { calculatorInternalApiAxios, internalApiAxios } from "@/services/api";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const headersInstance = headers();
  const authorization = headersInstance.get("authorization");

  const body = await request.json();
  const externalReq = await calculatorInternalApiAxios({
    method: "post",
    url: "/mercadoPago",
    data: body,
    headers: { Authorization: authorization },
  }).catch((error) => {
    return error.response;
  });

  return NextResponse.json(externalReq.data);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  const externalReq = await calculatorInternalApiAxios({
    method: "GET",
    url: "/mercadoPago",
    params: { id },
  }).catch((error) => {
    return error.response;
  });

  return NextResponse.json(externalReq.data);
}
