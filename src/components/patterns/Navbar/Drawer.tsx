"use client";

import { Box, Drawer } from "@mui/material";
import Link from "next/link";

interface DrawerProps {
  open: boolean;
  onClose(): void;
  linkOptions: {
    label: string;
    link: string;
  }[];
}

const links = () => {
  return (
    <>
      <Link href="/quem-somos">
        <li>Quem somos</li>
      </Link>
      <Link href="/selos-de-neutralizacao">
        <li>Selos de Neutralização</li>
      </Link>
      <Link href="/projetos-apoiados">
        <li>Projetos</li>
      </Link>
      <Link href="/marketplace">
        <li>Marketplace</li>
      </Link>
      <Link href="/assinatura-para-parceiros">
        <li>Planos</li>
      </Link>

      <a
        target="_blanc"
        href={process.env.NEXT_PUBLIC_URL_CARBONFAIR_PARCEIRO ?? ""}
      >
        Login
      </a>
    </>
  );
};

const DrawerComponent = ({ open, onClose, linkOptions }: DrawerProps) => {
  return (
    <div data-testid="drawer">
      <Drawer
        open={open}
        onClose={onClose}
        sx={{
          ".MuiDrawer-paper": {
            minWidth: "75%",
            padding: "4rem 2rem",
            maxWidth: "80%",
          },

          ul: {
            padding: "0",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          },

          li: {
            listStyle: "none",
          },
        }}
      >
        <div data-testid="drawer"></div>
        <Box className="mobile-navbar-container">
          <ul className="navbar-menu">
            {linkOptions.map((item, index) => (
              <Link href={item.link} key={index}>
                <li>{item.label}</li>
              </Link>
            ))}

            <Link
              target="_blank"
              href={process.env.NEXT_PUBLIC_URL_CARBONFAIR_PARCEIRO ?? ""}
            >
              Login
            </Link>
          </ul>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
