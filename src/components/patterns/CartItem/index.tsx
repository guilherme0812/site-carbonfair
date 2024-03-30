import * as React from "react";
import { ConfirmModal } from "../../ui";
import {
  Box,
  Paper,
  Typography,
  Divider,
  Chip,
  Tooltip,
  Grid,
} from "@mui/material";
import useStore, { CartProduct } from "@/hooks/useCartStore";
import useBreakpoints from "@/hooks/useBreakpoints";
import CartItemCounter from "../Cart/Counter";
import { enqueueSnackbar } from "notistack";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CartItem = (item: CartProduct) => {
  const [open, setOpen] = React.useState(false);
  const { mdDown } = useBreakpoints();

  const { addToCart, removeItem } = useStore((states) => states);

  const handleChangeCounterQuantity = (newQuantity: number) => {
    if (newQuantity > 0) {
      if (newQuantity <= item.num_carbon_saldo) {
        addToCart({
          ...item,
          quantity: newQuantity,
        });
      } else {
        enqueueSnackbar(
          "Não é possível adicionar quantidade acima do número em estoque",
          {
            variant: "warning",
          }
        );
      }
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      {open && (
        <ConfirmModal
          message="Remover item do carrinho"
          open={open}
          handleClose={() => setOpen(false)}
          handleExclude={() => removeItem(item.id)}
        />
      )}

      <Box
        component={Paper}
        variant="outlined"
        elevation={0}
        sx={(theme) => ({
          position: "relative",
          bgcolor: theme.palette.background.paper,
          display: "flex",
          alignItems: "center",
          minHeight: 130,
          py: 1,
          px: 2,
          gap: 4,
          width: "100%",
        })}
      >
        <Box sx={{ position: "absolute", right: 8, top: 8 }}>
          <DeleteOutlineIcon
            color="error"
            sx={{ cursor: "pointer" }}
            onClick={() => handleChangeCounterQuantity(0)}
          />
        </Box>

        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            height: `calc(100px - ${theme.spacing(2)})`,
            width: "100px",
            backgroundImage: `url(${item?.des_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 1,
            flexGrow: 1,
          })}
        ></Box>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={item.quantity >= 1 ? (!mdDown ? 7 : 8.5) : 8.5}>
            <Box
              sx={() => ({
                display: "flex",
                flexDirection: "column",
                gap: 1,
              })}
            >
              <Box>
                <Typography variant="body1">{item.des_projeto}</Typography>
              </Box>

              <Divider sx={{ width: "90%" }} />

              {item.quantity >= 1 ? (
                <>
                  {!mdDown ? (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Tooltip title={item.des_bioma}>
                          <Chip
                            label={item.des_bioma}
                            size="small"
                            color="info"
                            sx={(theme) => ({
                              px: 2,
                              [theme.breakpoints.up("md")]: {
                                maxWidth: 130,
                              },
                            })}
                          />
                        </Tooltip>
                        <Typography
                          variant="caption"
                          sx={{ maxWidth: 100, textAlign: "center" }}
                        >
                          {item.des_cidade}
                        </Typography>
                      </Box>

                      <Divider orientation="vertical" flexItem />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {item.des_padrao.length < 4 ? (
                          <Tooltip title={item.des_padrao}>
                            <Chip
                              label={item.des_padrao}
                              size="small"
                              color="primary"
                              sx={(theme) => ({
                                px: 2,
                                [theme.breakpoints.up("md")]: {
                                  maxWidth: 80,
                                },
                              })}
                            />
                          </Tooltip>
                        ) : (
                          <Box sx={{ height: 20 }}></Box>
                        )}
                        {item.quantity >= 1 && (
                          <Typography
                            variant="caption"
                            sx={{ maxWidth: 100, textAlign: "center" }}
                          >
                            {item.num_carbon_saldo} disponível
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ) : (
                    <>
                      <CartItemCounter
                        value={item.quantity}
                        handleChange={handleChangeCounterQuantity}
                      />
                    </>
                  )}
                </>
              ) : (
                <Box>
                  <Typography variant="body2" sx={{ fontSize: "0.64rem" }}>
                    Voce está comprando um pedacinho desse crédido. Seu pequeno
                    gesto já faz a diferença!
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>

          {item.quantity >= 1 && !mdDown && (
            <Grid item xs={1.5}>
              <CartItemCounter
                value={item.quantity}
                handleChange={handleChangeCounterQuantity}
              />
            </Grid>
          )}

          <Grid item xs={3.5}>
            {item.quantity >= 1 && (
              <Typography variant="subtitle2" align="right">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(item.vlr_preco || 0))}
              </Typography>
            )}
            <Typography variant="subtitle1" fontWeight="bold" align="right">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(item.vlr_preco || 0) * item.quantity)}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CartItem;
