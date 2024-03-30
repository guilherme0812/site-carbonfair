// import Button from "@/components/ui/CustomMui/Button";
import { Button } from "@/components/ui";
import useStore from "@/hooks/useCartStore";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function EmptyCart() {
  const { toggleDrawer } = useStore();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            width={200}
            height={200}
            alt="Carrinho cazio"
            src="/images/carrinho-vazio.png"
          />
        </Box>

        <Box sx={{ maxWidth: 400, m: "auto", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            Seu carrinho está vazio
          </Typography>
          <Typography textAlign="center">
            Seu carrinho está vazio. Por favor, adicione itens para continuar
            comprando.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 200, m: "auto" }}>
          <Link href="#compense-suas-emissoes">
            <Button variant="contained" onClick={toggleDrawer}>
              Comprar
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default EmptyCart;
