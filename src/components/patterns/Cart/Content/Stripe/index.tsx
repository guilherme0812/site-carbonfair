import { Box, Skeleton } from "@mui/material";
import FirstStep from "../../FirstStep";
import { useEffect, useState } from "react";
import useStore from "@/hooks/useCartStore";

import * as Yup from "yup";
import PaymentFormContent from "../../PaymentFormContent";
// import { internalApiAxios } from '@/services/api'
import StripePaymentStatus from "./StripePaymentStatus";
import PaymentButton from "../../PaymentButton";
import { internalApiAxios } from "@/services/api";
// import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const validationNameSchema = Yup.object().shape({
  name: Yup.string().required("O e-mail é obrigatório"),
});
const validationEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
});

function StripePaymentContent() {
  const gridTemplateRows = "calc(100% - 150px ) 150px";

  const {
    name,
    email,
    sessionId,
    cart: itens,
    documentNumber,
    resultId,
    beneficiary,
    discount,
    discountCoupon,
    referencePeriod,
    additionalText,
  } = useStore();
  // const routes = useRouter();
  const searchParams = useSearchParams();

  const hasPayment = searchParams.has("payment");

  const total = itens.reduce(
    (acc, item) => acc + item.vlr_preco * item.quantity,
    0
  );
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const nameIsValid = validationNameSchema.isValidSync({ name });
  const emailIsValid = validationEmailSchema.isValidSync({ email });
  const numTotal = itens.reduce((acc, item) => acc + item.quantity, 0);

  const hasTypeVCS: boolean = itens.some((item) => item.des_padrao == "VCS");

  const redirectToCheckout = async () => {
    const line_items = itens.map((item) => ({
      price: item.price?.id,
      quantity: item.quantity,
    }));

    setIsLoading(true);
    const req = await internalApiAxios({
      method: "POST",
      url: "/stripe/checkout_sessions",
      data: {
        line_items,
        des_email: email,
        des_nome: name,
        id_resultado: resultId,
        id_sessao: sessionId,
        num_credito: numTotal,
        num_valor: total - total * (discount / 100),
        des_cpf_cnpj: documentNumber as string,
        des_beneficiario: beneficiary || "",
        des_periodo_referente: referencePeriod as any,
        des_texto_adicional: additionalText,
        cupom: discountCoupon,
        itens: itens.map((item) => ({
          id_projeto: item?.id_projeto as number,
          num_credito: item.quantity,
          vlr_credito: (item.price?.unit_amount as number) / 100,
        })),
      },
      params: { hasTypeVCS },
    });

    const { data } = req;

    if (req.status == 200) {
      window.location.assign(data.url);
    }

    setIsLoading(false);
  };

  const handlePayment = () => {
    redirectToCheckout();
  };

  useEffect(() => {
    if (hasPayment) {
      setStep(2);
    }
  }, [hasPayment]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateRows: gridTemplateRows,
          bgcolor: theme.palette.grey[200],
          px: 2,
          overflow: "none",
          position: "absolute",
          width: "100%",
          height: "100%",
        })}
      >
        {step == 0 ? (
          <FirstStep
            itens={itens}
            paymentMethod="card"
            total={total}
            handleChangePayment={() => {
              //
            }}
          />
        ) : step == 1 ? (
          <PaymentFormContent
            handleBack={() => setStep(step - 1)}
            emailIsValid={emailIsValid}
            nameIsValid={emailIsValid}
            showEmailField
          />
        ) : (
          <StripePaymentStatus total={total} handleBack={() => setStep(0)} />
        )}

        {!isLoading ? (
          <PaymentButton
            discount={discount}
            showButton
            disabled={
              step == 0
                ? itens.length == 0
                : step == 1
                ? nameIsValid
                  ? emailIsValid
                    ? documentNumber?.length > 0
                      ? beneficiary
                        ? false
                        : true
                      : true
                    : true
                  : true
                : true
            }
            buttonLabel="Pagar"
            onClick={() => (step < 1 ? setStep(step + 1) : handlePayment())}
            total={total}
          />
        ) : (
          <Skeleton variant="rounded" sx={{ height: 36 }} />
        )}
      </Box>
    </Box>
  );
}

export default StripePaymentContent;
