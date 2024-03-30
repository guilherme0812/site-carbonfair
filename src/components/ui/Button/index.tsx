"use client";

import { styled, Theme } from "@mui/material/styles";
import ButtonMUI from "@mui/material/Button";

const Button = styled(ButtonMUI)(({ theme }: { theme: Theme }) => ({
  textTransform: "none",
  borderRadius: theme.shape.borderRadius * 2,
  minWidth: "100px",
}));
export default Button;
