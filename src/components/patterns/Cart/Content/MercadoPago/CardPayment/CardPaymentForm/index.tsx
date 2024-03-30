import { Box, Skeleton, Typography } from "@mui/material";
import {
  initMercadoPago,
  CardPayment,
  StatusScreen,
} from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import {
  ICardPaymentBrickPayer,
  ICardPaymentFormData,
} from "@mercadopago/sdk-react/bricks/cardPayment/type";
import { useMutation } from "react-query";
import { internalApiAxios } from "@/services/api";
import useStore from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

type CardPaymentFormType = {
  total: number;
};

initMercadoPago(process.env.NEXT_PUBLIC_PUBLIC_KEY || "");

function CardPaymentForm({ total }: CardPaymentFormType) {
  const [paymentData, setPaymentData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const routes = useRouter();
  const {
    cart: itens,
    sessionId,
    name,
    resetAll,
    resetCart,
    resultId,
    beneficiary,
    discountCoupon,
    toggleDrawer,
    discount,
    referencePeriod,
    additionalText,
    setPaymentStatus,
  } = useStore();
  const numTotal = itens.reduce((acc, item) => acc + item.quantity, 0);

  const {
    mutateAsync: sendPayment,
    // isError,
  } = useMutation(
    async (body: any) =>
      internalApiAxios({
        method: "post",
        url: "/mercadoPago/cardPayment",
        data: body,
      }),
    {
      onError: () => {
        enqueueSnackbar("Houve um erro ao efetuar o pagemnto.", {
          variant: "error",
        });

        setLoading(false);
      },
    }
  );

  const handlePayment = async (
    param: ICardPaymentFormData<ICardPaymentBrickPayer>
  ) => {
    setLoading(true);
    await sendPayment({
      ...param,
      id_resultado: resultId,
      num_credito: numTotal,
      id_sessao: sessionId,
      des_nome: name,
      des_beneficiario: beneficiary || "",
      des_periodo_referente: referencePeriod,
      des_texto_adicional: additionalText,
      cupom: discount > 0 ? discountCoupon : null,
      itens: itens.map((item) => ({
        id_projeto: item.id_projeto as number,
        num_credito: item.quantity,
        vlr_credito: item.vlr_preco,
      })),
    })
      .then((value) => setPaymentData(value.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (paymentData) {
      if (paymentData?.status == "approved") {
        resetCart();
        setTimeout(() => {
          resetAll();
          toggleDrawer();
          routes.push("/");
        }, 1000 * 30);
      }
      setPaymentStatus(paymentData?.status);
      setLoading(false);
    }
  }, [paymentData]);

  return (
    <Box>
      {!paymentData ? (
        <>
          {!loading ? (
            <CardPayment
              initialization={{ amount: total - total * (discount / 100) }}
              onSubmit={handlePayment}
            />
          ) : (
            <Skeleton variant="rounded" sx={{ height: 290 }} />
          )}
        </>
      ) : (
        <Box sx={{ pt: 4 }}>
          <StatusScreen
            initialization={{ paymentId: String(paymentData.id) }}
          />

          {paymentData.status == "approved" && (
            <Typography textAlign="center" sx={{ mt: 4, fontStyle: "italic" }}>
              Agradecemos imensamente pelo seu apoio contínuo na preservação do
              meio ambiente. Cada ação sua é um passo valioso para um planeta
              mais saudável.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}

export default CardPaymentForm;
