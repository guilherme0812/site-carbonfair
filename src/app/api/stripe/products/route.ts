import { NextResponse } from "next/server";
import { stripe } from "..";

export const revalidate = 0;

export async function GET() {
  try {
    const productsResponse = await stripe.products.list();
    return NextResponse.json(productsResponse.data, { status: 200 });
  } catch (error) {
    return NextResponse.json([], { status: 400 });
  }
}
