import useBreakpoints from "@/hooks/useBreakpoints";
import { Box, Drawer, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";

interface CartContainerProps {
  open: boolean;
  onClose(): void;
  title?: string;
  children: ReactNode;
}

const CartContainer = ({
  open,
  onClose,
  title = "Carrinho de créditos de carbono",
  children,
}: CartContainerProps) => {
  const { mdDown } = useBreakpoints();
  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            "& .MuiDrawer-paper": {
              width: "90%",
            },
          },
          [theme.breakpoints.up("md")]: {
            "& .MuiDrawer-paper": {
              width: "600px",
            },
          },
        })}
      >
        <Box sx={{ position: "relavite" }}>
          <Box
            sx={(theme) => ({
              display: "grid",
              gridTemplateRows: `50px calc(100% - 50px - ${theme.spacing(2)})`,
              bgcolor: theme.palette.grey[200],
              position: "absolute",
              width: "100%",
              height: "100%",
              gap: 2,
            })}
          >
            <Box
              component="header"
              sx={(theme) => ({
                px: 2,
                display: "flex",
                gap: "20px",
                alignItems: "center",
                bgcolor: theme.palette.primary.main,
                boxShadow: `0 4px 8px ${theme.palette.grey[400]}`,
              })}
            >
              <Image
                src="/images/add-to-cart.png"
                width={30}
                height={30}
                alt="marketplace"
              />

              <Typography
                variant={mdDown ? "subtitle1" : "h6"}
                component="h2"
                fontWeight="bold"
                color="#fff"
              >
                {title}
              </Typography>
            </Box>

            {children}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default CartContainer;
