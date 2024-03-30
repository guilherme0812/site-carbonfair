import { Avatar, Box, Paper, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import PaymentIcon from "@mui/icons-material/Payment";
import CloseIcon from "@mui/icons-material/Close";
import BackStep from "../../../BackStep";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "@/hooks/useCartStore";

type StripePaymentStatusType = { total: number; handleBack(): void };
function StripePaymentStatus({ total, handleBack }: StripePaymentStatusType) {
  const routes = useRouter();
  const { resetCart, resetAll, toggleDrawer, setPaymentStatus, paymentStatus } =
    useStore();

  useEffect(() => {
    if (paymentStatus == "approved") {
      resetCart();
      setTimeout(() => {
        resetAll();
        toggleDrawer();
      }, 1000 * 20);
    }
  }, [paymentStatus]);

  useEffect(() => {
    setPaymentStatus(routes.query.payment as any);
  }, []);

  return (
    <Box>
      <BackStep handleBack={handleBack} />

      {paymentStatus ? (
        <>
          <Box
            sx={(theme) => ({
              pt: 6,
              mt: 2,
              mb: 4,
              bgcolor:
                paymentStatus == "approved"
                  ? theme.palette.primary.main
                  : theme.palette.error.main,
              boxShadow: theme.shadows[2],
              borderRadius: 1,
              overflow: "hidden",
            })}
          >
            <Box
              sx={(theme) => ({
                p: 2,
                flexGrow: 1,
                bgcolor: theme.palette.background.paper,
              })}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  transform: "translateY(-35px)",
                }}
              >
                <Avatar
                  sx={(theme) => ({
                    border: `2px solid ${theme.palette.background.paper}`,
                    bgcolor:
                      paymentStatus == "approved"
                        ? theme.palette.primary.main
                        : theme.palette.error.main,
                  })}
                >
                  {paymentStatus == "approved" ? <CheckIcon /> : <CloseIcon />}
                </Avatar>
              </Box>
              <Typography
                textAlign="center"
                fontWeight="bold"
                variant="body1"
                sx={{ mt: 0 }}
              >
                {paymentStatus == "approved"
                  ? "Seu pagamento foi aprovado"
                  : "Pagamento cancelado"}
              </Typography>

              <Box
                component={Paper}
                variant="outlined"
                sx={{
                  mt: 2,
                  p: 2,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {paymentStatus == "approved" ? (
                    <Image
                      src="/images/qrcode.png"
                      width={30}
                      height={30}
                      alt="qrcode"
                    />
                  ) : (
                    <PaymentIcon />
                  )}
                </Box>
                <Box>
                  <Typography sx={{}}>
                    {new Intl.NumberFormat("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    }).format(total)}
                  </Typography>
                  <Typography variant="body2">
                    {paymentStatus == "approved"
                      ? "Pagamento com PIX feito com sucesso"
                      : "Clique em voltar para tentar novamente"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {paymentStatus == "approved" && (
            <>
              <Typography textAlign="center">
                Você acaba de contribuir com um projeto validado e certificado
                internacionalmente! Agradecemos por confiar em nossa empresa
                para compensar a sua emissão de gases de efeito estufa.
              </Typography>
              <Typography textAlign="center">
                Agradecemos por confiar em nossa empresa para compensar a sua
                emissão de gases de efeito estufa.
              </Typography>
              <Typography textAlign="center">
                Você acaba de contribuir com um projeto validado e certificado
                internacionalmente!
              </Typography>
              <Typography textAlign="center">
                Esperamos que tenha ficado satisfeito, com essa ação você reduz
                o seu impacto ambiental e colabora para diminuir as mudanças
                climáticas.
              </Typography>
              <Typography textAlign="center">
                Parabéns por fazer a escolha certa! Aguardamos seu feedback para
                continuarmos entregando sustentabilidade para mais pessoas.
              </Typography>
            </>
          )}
        </>
      ) : (
        <Skeleton variant="rounded" sx={{ height: 228, mt: 2 }} />
      )}
    </Box>
  );
}

export default StripePaymentStatus;
