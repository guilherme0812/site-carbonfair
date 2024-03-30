"use client";

import { Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
// import Carousel from './Carousel'
import { useStripePrices, useStripeProducts } from "../../../hooks/stripeApi";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { MarketplaceCard } from "../../ui";
import { CartProduct } from "../../../hooks/useCartStore";
import { useProjectMarketPlace } from "../../../hooks/useApiProjectMarketPlace";
import Stripe from "stripe";

interface CompensateSectionProps {
  headerContent?: React.ReactNode;
  mode: "grid" | "corousel";
}

const CompensateSection = ({ headerContent, mode }: CompensateSectionProps) => {
  const [productsList, setProductsList] = useState<CartProduct[]>([]);
  const { products, productsIsLoading, isError } = useStripeProducts();
  const { prices, pricesIsLoading } = useStripePrices();
  const { data } = useProjectMarketPlace();

  useEffect(() => {
    if (data) {
      const list: CartProduct[] = data.map((exposed) => {
        return {
          ...exposed,
          quantity: 0,
          product: undefined,
          price: undefined,
        };
      });

      setProductsList(list);
    }
  }, [data]);

  return (
    <Box
      sx={(theme) => ({
        // bgcolor: theme.palette.grey[100],
      })}
    >
      <div className="container" id="compense-suas-emissoes">
        {headerContent}

        {isError && (
          <Typography textAlign="center">
            Erro interno ao carregar os produtos
          </Typography>
        )}
        {productsIsLoading && pricesIsLoading ? (
          <Skeleton variant="rounded" sx={{ height: 400 }} />
        ) : mode == "grid" ? (
          <Grid container columnSpacing={2} rowSpacing={4}>
            {productsList.map((product, index) => (
              <Grid item xs={12} md={3} key={index}>
                <MarketplaceCard {...product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            {data && productsList.length > 0 && (
              <Carousel productsList={productsList} />
            )}
          </Box>
        )}
      </div>
    </Box>
  );
};
export default CompensateSection;
