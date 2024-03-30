import { apiCFCalculator } from "@/services/api";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";

export const revalidate = 60;

export async function POST(request: NextRequest) {
  const headers = {
    session_id: v4(),
    "X-Forwarded-Host": process.env.NEXT_PUBLIC_CALCULATOR_HOST ?? "",
  };

  const body = await request.json();

  try {
    const reqToken = await apiCFCalculator({
      method: "GET",
      url: "/token",
      headers: headers,
    });

    const token = reqToken.data.token;

    const res = await apiCFCalculator({
      method: "POST",
      url: "/carrinho",
      data: body,
      headers: {
        Authorization: token,
      },
    });

    return NextResponse.json(res.data, { status: reqToken.status });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json("only POST");
}
