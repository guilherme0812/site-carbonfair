"use client";

// import { useCompanyData } from '@/hook/useCompanyData'
import CartContainer from "./CartContainer";
import MPPaymentContent from "./Content/MercadoPago";
import StripePaymentContent from "./Content/Stripe";
import { Typography } from "@mui/material";
// import useStore from '@/hook/useCartStore'
import EmptyCart from "./EmptyCart";
import useStore from "@/hooks/useCartStore";

interface CartProps {
  open: boolean;
  onClose(): void;
}

const Cart = ({ open, onClose }: CartProps) => {
  const gatewayId: any = 1;
  const { cart, paymentStatus } = useStore();

  return (
    <CartContainer onClose={onClose} open={open}>
      {cart.length == 0 && paymentStatus == null ? (
        <EmptyCart />
      ) : gatewayId == 1 ? (
        <MPPaymentContent />
      ) : gatewayId == 2 ? (
        <StripePaymentContent />
      ) : (
        <Typography textAlign="center">Gateway não identificado</Typography>
      )}
    </CartContainer>
  );
};

export default Cart;
