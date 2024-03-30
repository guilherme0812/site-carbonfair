"use client";

import * as React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Box, IconButton, Tooltip, styled } from "@mui/material";
import { IoLogoWhatsapp } from "react-icons/io5";

interface CartProps {
  count: number;
  handleClick?(): void;
}

const Container = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "1rem",
  right: "25px",
  backgroundColor: theme.palette.primary.main,
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  borderRadius: "100%",
  boxShadow: theme.shadows[2],
  transition: "0.3s",
  cursor: "pointer",
  zIndex: "1000",

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },

  ".icon-container": {
    position: "absolute",
    top: "0px",
    right: "-5px",
    height: "17px",
    width: "17px",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.7em",
    color: "#fff",
    diaplay: "flex",
  },
}));

const CartButton = ({ count, handleClick }: CartProps) => {
  return (
    <div>
      <Tooltip title="Abrir o carrinho" placement="left">
        <Container>
          <IconButton onClick={handleClick} sx={{ color: "#fff" }}>
            <div className="icon-container">{count}</div>
            <Box sx={{ mb: "-5px" }}>
              <IoCartOutline size={20} />
            </Box>
          </IconButton>
        </Container>
      </Tooltip>
    </div>
  );
};
export default CartButton;
