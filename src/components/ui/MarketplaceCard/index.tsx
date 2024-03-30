"use client";

import useStore, { CartProduct } from "../../../hooks/useCartStore";
import { Box, IconButton, Typography } from "@mui/material";
import Button from "../Button";
import { IoAddOutline, IoRemoveOutline, IoCartOutline } from "react-icons/io5";
import { ChangeEvent, useState } from "react";
import { ConfirmModal } from "..";
// import { ConfirmModal } from "@/components/ui";
// import { useCart } from "@/hook/useCart";

export interface StripeCardProps {
  product: CartProduct;
}

const MarketplaceCard = (props: CartProduct) => {
  const [open, setOpen] = useState(false);
  const price = Number(props?.vlr_preco || 0);

  const { cart, addToCart, removeItem, toggleDrawer } = useStore(
    (states) => states
  );

  const existItem = cart.find((item) => item.id == props.id);

  const quantity = existItem ? existItem.quantity : 0;

  const handleChangeQuantity = (newQuantity: number) => {
    if (newQuantity > 0) {
      addToCart({
        ...props,
        quantity: newQuantity,
      });
    } else {
      setOpen(true);
    }
  };

  const hanleChangeManually = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) ?? 0;

    if (value) {
      if (props?.num_carbon_saldo) {
        if (value <= props?.num_carbon_saldo) {
          addToCart({
            ...props,
            quantity: value,
          });
        } else {
          addToCart({
            ...props,
            quantity: props?.num_carbon_saldo,
          });
        }
      }
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <ConfirmModal
        open={open}
        handleClose={() => setOpen(false)}
        handleExclude={() => removeItem(props.id)}
        message="Remover item do carrinho ?"
      />

      <Box
        sx={(theme) => ({
          borderTop: `5px solid ${theme.palette.primary.main}`,
          borderRadius: 2,
          maxWidth: 300,
          m: "auto",
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          position: "relative",
        })}
      >
        <Box
          sx={(theme) => ({
            bgcolor: theme.palette.primary.main,
            height: 200,
            backgroundImage: `url(${props?.des_url || ""})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          })}
        >
          <Box
            sx={({ palette }) => ({
              p: 1,
              pl: 2,
              bgcolor: props?.num_carbon_saldo
                ? palette.primary.dark
                : palette.error.dark,
              display: "flex",
              alignItems: "center",
              color: "#fff",
              position: "absolute",
              left: 0,
              bottom: "0.5rem",
              width: "95%",
              borderRadius: "0 8px 8px 0",
            })}
          >
            <Typography fontSize="0.7rem">
              {props?.num_carbon_saldo} &nbsp;
            </Typography>
            {props?.num_carbon_saldo ? (
              <Typography fontSize="0.8rem">
                Créditos de Carbono Disponíveis
              </Typography>
            ) : (
              <Typography fontSize="0.8rem">Créditos Esgotados</Typography>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            minHeight: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 2,
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {props?.des_projeto}
            </Typography>

            <Typography variant="subtitle2" sx={{ mb: 1 }} fontWeight="bold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
            </Typography>
            <Typography variant="subtitle2">
              {props?.txt_descricao_marketplace}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "space-between",
                gap: 1,
                alignItems: "center",
              }}
            >
              <IconButton
                size="small"
                onClick={() =>
                  quantity > 0 && handleChangeQuantity(quantity - 1)
                }
              >
                <IoRemoveOutline />
              </IconButton>
              <input
                value={quantity}
                style={{
                  border: "none",
                  textAlign: "center",
                  width: 30,
                }}
                onChange={hanleChangeManually}
              />
              <IconButton
                size="small"
                onClick={() =>
                  props?.num_carbon_saldo &&
                  props?.num_carbon_saldo != quantity &&
                  handleChangeQuantity(quantity + 1)
                }
              >
                <IoAddOutline />
              </IconButton>
            </Box>

            <Box sx={{ width: "50%" }}>
              <Button
                variant="contained"
                onClick={() =>
                  quantity == 0
                    ? props?.num_carbon_saldo &&
                      addToCart({
                        ...props,
                        quantity: 1,
                      })
                    : toggleDrawer()
                }
              >
                <IoCartOutline size="1.2rem" /> &nbsp;
                {quantity > 0 ? "Adicionado" : "Comprar"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MarketplaceCard;
