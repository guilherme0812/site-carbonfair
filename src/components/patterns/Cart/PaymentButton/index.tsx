import { Box, Divider, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@/components/ui";

type PaymentButtonType = {
  showButton?: boolean;
  disabled: boolean;
  total: number;
  onClick(): void;
  buttonLabel: string;
  discount: number;
};

function PaymentButton({
  showButton,
  disabled,
  total,
  onClick,
  buttonLabel,
  discount = 0,
}: PaymentButtonType) {
  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: showButton ? "space-between" : "flex-end",
        height: "100%",
      }}
    >
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2">Subtotal</Typography>
          <Typography variant="body2">
            {new Intl.NumberFormat("pt-BR", {
              currency: "BRL",
              style: "currency",
            }).format(total)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2">Desconto</Typography>
          <Typography variant="body2">{discount}%</Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight="bold" variant="body2">
            TOTAL
          </Typography>
          <Typography fontWeight="bold" variant="body1">
            {new Intl.NumberFormat("pt-BR", {
              currency: "BRL",
              style: "currency",
            }).format(total - total * (discount / 100))}
          </Typography>
        </Box>
      </div>
      {showButton && (
        <Button
          variant="contained"
          fullWidth
          startIcon={<LockIcon />}
          onClick={onClick}
          disabled={disabled}
        >
          {buttonLabel}
        </Button>
      )}
    </Box>
  );
}

export default PaymentButton;
