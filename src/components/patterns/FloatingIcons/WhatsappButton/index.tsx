"use client";

import { Box, Tooltip, styled } from "@mui/material";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";

const Container = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: "25px",
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

const WhatsappButton = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5511982144404"
      target="_blanc"
    >
      <Tooltip title="Entrar em contato" placement="left">
        <Container>
          <div>
            <div className="icon-container">...</div>
            <Box sx={{ mb: "-5px" }}>
              <IoLogoWhatsapp size={20} />
            </Box>
          </div>
        </Container>
      </Tooltip>
    </Link>
  );
};

export default WhatsappButton;
