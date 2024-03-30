"use client";

import { useZustandStore } from "@/hooks/useStore";
import CartButton from "./CartButton";
import useStore from "@/hooks/useCartStore";
import WhatsappButton from "./WhatsappButton";

const FloatingIcons = () => {
  const store = useZustandStore(useStore, (states) => states);

  return (
    <>
      <CartButton
        count={store?.cart.length ?? 0}
        handleClick={() => store?.toggleDrawer()}
      />

      <WhatsappButton />
    </>
  );
};

export default FloatingIcons;
