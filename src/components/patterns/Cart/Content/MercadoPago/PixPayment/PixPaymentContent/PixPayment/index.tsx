import { CounterDown } from "@/components/ui";
import useBreakpoints from "@/hooks/useBreakpoints";
import { internalApiAxios } from "@/services/api";
import { Box, Divider, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Button } from "@/components/ui";
import { IoCopyOutline } from "react-icons/io5";
import { enqueueSnackbar } from "notistack";
import useStore from "@/hooks/useCartStore";
import PixPaymentApproved from "../PixPaymentApproved";
import axios from "axios";

type PIXPaymentType = {
  total: number;
};

function PixPayment({ total }: PIXPaymentType) {
  const [status, setStatus] = useState<"pending" | "approved">("pending");
  const [key, setKey] = useState(0);
  const [isFinishedCounter, setIsFinishedCounter] = useState(false);
  const [paymentData, setPaymentData] = useState<any>();
  const minTransitionAmount = 4;
  const {
    name,
    email,
    sessionId,
    cart: itens,
    toggleDrawer,
    resetAll,
    resultId,
    beneficiary,
    discountCoupon,
    documentNumber,
    discount,
    referencePeriod,
    additionalText,
    setPaymentStatus,
    resetCart,
  } = useStore();
  const { mdDown } = useBreakpoints();

  const numTotal = itens.reduce((acc, item) => acc + item.quantity, 0);

  const {
    mutateAsync: getPixData,
    // isError,
  } = useMutation(() =>
    internalApiAxios({
      method: "post",
      url: "/mercadoPago",
      data: {
        id_resultado: resultId,
        num_credito: numTotal,
        num_valor:
          total >= 4
            ? Number((total - total * (discount / 100)).toFixed(2))
            : minTransitionAmount,
        id_sessao: sessionId,
        des_nome: name,
        des_email: email,
        des_cpf_cnpj: documentNumber,
        des_beneficiario: beneficiary || "",
        des_periodo_referente: referencePeriod as any,
        des_texto_adicional: additionalText,
        cupom: discountCoupon,
        itens: itens.map((item) => ({
          id_projeto: item.id_projeto as number,
          num_credito: item.quantity,
          vlr_credito: item.vlr_preco,
        })),
      },
    })
  );

  const handlePix = async () => {
    const req = await getPixData();
    setPaymentData(req.data);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(
      paymentData.point_of_interaction.transaction_data.qr_code
    );

    enqueueSnackbar("Copie e cole no seu aplicativo de banco", {
      variant: "info",
      anchorOrigin: { horizontal: "center", vertical: "bottom" },
    });
  };

  const getStatusPayment = async () => {
    const res = await internalApiAxios({
      method: "get",
      url: "/mercadoPago",
      params: { id: paymentData.id },
    });

    if (res.status == 200) {
      setStatus(res.data.status);
    }

    setPaymentStatus(res.data.status);
  };

  useEffect(() => {
    if (total && !isFinishedCounter) {
      handlePix();
    }
  }, [total, isFinishedCounter]);

  useEffect(() => {
    if (status == "approved") {
      resetCart();
      setTimeout(() => {
        resetAll();
        toggleDrawer();
      }, 1000 * 30);
    }
  }, [status, paymentData]);

  useEffect(() => {
    if (status != "approved") {
      setTimeout(() => {
        paymentData && getStatusPayment();
        setKey(key + 1);
      }, 3000);
    }
  }, [key, status]);

  return (
    <>
      <Box
        sx={{
          height: "90%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            mt: 4,
            justifySelf: "center",
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            width: status == "approved" ? "100%" : "auto",
          }}
        >
          {status == "pending" && !isFinishedCounter ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 1,
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6">Total a pagar:</Typography>
                <Typography fontWeight="bold" variant="h5">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total - total * (discount / 100))}
                </Typography>
              </Box>

              <Divider sx={{ mx: 2, mb: 2 }} />

              {paymentData?.id ? (
                <Box
                  sx={() => ({
                    display: "flex",
                    justifyContent: "center",
                  })}
                >
                  <img
                    src={`data:image/jpeg;base64,${paymentData.point_of_interaction.transaction_data.qr_code_base64}`}
                    style={{
                      width: mdDown ? "80%" : "200px",
                      height: mdDown ? "80%" : "200px",
                    }}
                    alt="imagem"
                  />
                </Box>
              ) : (
                <Skeleton
                  variant="rounded"
                  sx={{
                    height: mdDown ? "80%" : "200px",
                    width: mdDown ? "80%" : "200px",
                    m: "auto",
                  }}
                />
              )}

              <Box
                sx={{
                  mt: 2,
                }}
              >
                <Divider sx={{ mx: 2 }} />

                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                  }}
                >
                  <Button
                    fullWidth
                    startIcon={<IoCopyOutline />}
                    disabled={total ? false : true}
                    onClick={handleCopyPix}
                  >
                    Pix copia e cola
                  </Button>
                </Box>
              </Box>
            </>
          ) : (
            status == "approved" &&
            !isFinishedCounter && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                    flexDirection: "column",
                  }}
                >
                  <PixPaymentApproved total={total} />

                  <Typography
                    textAlign="center"
                    sx={{ mt: 4, fontStyle: "italic" }}
                  >
                    Agradecemos imensamente pelo seu apoio contínuo na
                    preservação do meio ambiente. Cada ação sua é um passo
                    valioso para um planeta mais saudável.
                  </Typography>
                </Box>
              </>
            )
          )}
        </Box>

        {status == "pending" && (
          <Box
            sx={{
              height: 50,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
            }}
          >
            {paymentData && status == "pending" ? (
              <Box>
                <Typography textAlign="center">Seu PIX expira em:</Typography>
                <CounterDown
                  onCounterFinish={() => setIsFinishedCounter(true)}
                />
              </Box>
            ) : (
              <Skeleton variant="rounded" height={50} width={200} />
            )}
          </Box>
        )}
      </Box>
    </>
  );
}

export default PixPayment;
