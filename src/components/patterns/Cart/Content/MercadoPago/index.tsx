"use client";

import useStore from "@/hooks/useCartStore";
import { Box } from "@mui/material";
import { useState } from "react";
import CardPaymentContent from "./CardPayment/CardPaymentContent";
import PixPaymentContent from "./PixPayment/PixPaymentContent";

import * as Yup from "yup";
import FirstStep from "../../FirstStep";
import PaymentFormContent from "../../PaymentFormContent";
import PaymentButton from "../../PaymentButton";

const validationNameSchema = Yup.object().shape({
  name: Yup.string().required("O e-mail é obrigatório"),
});
const validationEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
});

function PaymentContent() {
  const { cart: itens, name, email, discount } = useStore();

  const total = itens.reduce(
    (acc, item) => acc + item.vlr_preco * item.quantity,
    0
  );
  const [step, setStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<"PIX" | "card">("PIX");

  const nameIsValid = validationNameSchema.isValidSync({ name });
  const emailIsValid = validationEmailSchema.isValidSync({ email });

  const gridTemplateRows =
    step == 0 ? "calc(100% - 265px) 115px 150px " : "calc(100% - 150px) 150px";

  const showButton = step <= 1 ? true : false;

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
            handleChangePayment={(value) => setPaymentMethod(value)}
            paymentMethod={paymentMethod}
            total={total}
          />
        ) : step == 1 ? (
          <PaymentFormContent
            showEmailField={paymentMethod == "PIX"}
            handleBack={() => setStep(step - 1)}
            {...{ nameIsValid, emailIsValid }}
          />
        ) : (
          step == 2 && (
            <>
              {paymentMethod == "PIX" ? (
                <PixPaymentContent
                  total={total}
                  handleBack={() => setStep(step - 1)}
                />
              ) : (
                <CardPaymentContent
                  handleBack={() => setStep(step - 1)}
                  total={total}
                />
              )}
            </>
          )
        )}

        <PaymentButton
          discount={discount}
          showButton={showButton}
          disabled={
            step == 0
              ? itens.length == 0
              : nameIsValid
              ? paymentMethod == "PIX"
                ? emailIsValid
                  ? false
                  : true
                : false
              : true
          }
          buttonLabel={
            step == 0
              ? "Iniciar pagamento"
              : step == 1
              ? "Próximo passo"
              : "Pagar"
          }
          onClick={() => setStep(step + 1)}
          total={total}
        />
      </Box>
    </Box>
  );
}

export default PaymentContent;
