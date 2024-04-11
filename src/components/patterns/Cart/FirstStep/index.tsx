import CartItem from "../../CartItem";
import { CartProduct } from "@/hooks/useCartStore";
import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export type FirstStepType = {
  itens: CartProduct[];
  paymentMethod: "PIX" | "card";
  handleChangePayment(value: "PIX" | "card"): void;
  total: number;
};

function FirstStep({
  itens,
  handleChangePayment,
  paymentMethod,
  total,
}: FirstStepType) {
  // const { gatewayId } = useCompanyData()
  const gatewayId: any = 1;

  return (
    <>
      <Box sx={{ overflow: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {itens.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 * index}
              style={{ width: "100%" }}
            >
              <CartItem {...item} />
            </div>
          ))}
        </Box>
      </Box>

      {gatewayId == 1 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <FormLabel id="demo-radio-buttons-group-label">
            Método de pagamento
          </FormLabel>
          <RadioGroup
            defaultValue={paymentMethod}
            onChange={(_, value) => handleChangePayment(value as any)}
          >
            <FormControlLabel
              value="PIX"
              control={<Radio />}
              label={<Typography variant="body2">PIX</Typography>}
            />
            {total > 4 && (
              <FormControlLabel
                value="card"
                control={<Radio />}
                label={
                  <Typography variant="body2">Cartão de crédito</Typography>
                }
              />
            )}
          </RadioGroup>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}

export default FirstStep;
