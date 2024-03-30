import Stripe from "stripe";

export const stripeSecretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? "";
export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-08-16",
});
