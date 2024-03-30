"use client";

import axios from "axios";
import { UseQueryOptions, useQuery } from "react-query";
import Stripe from "stripe";

export const useStripeProducts = (queryParams?: UseQueryOptions) => {
  const { data, isLoading, isError } = useQuery(
    ["STRIPE_PRODUCTS"],
    async () => {
      const productsResponse = await axios({
        url: "/api/stripe/products",
      });

      return productsResponse.data;
    },
    {
      ...(queryParams as any),
    }
  );

  return {
    products: data as Stripe.Product[] | undefined,
    productsIsLoading: isLoading,
    isError,
  };
};

export const useStripePrices = (queryParams?: UseQueryOptions) => {
  const { data, isLoading } = useQuery(
    ["STRIPE_PRICES"],
    async () => {
      const productsResponse = await axios({
        url: "/api/stripe/prices",
      });

      return productsResponse.data;
    },
    {
      ...(queryParams as any),
    }
  );

  return {
    prices: data as Stripe.Price[] | undefined,
    pricesIsLoading: isLoading,
  };
};
