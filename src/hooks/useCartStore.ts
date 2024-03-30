"use client";

import Stripe from "stripe";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProjectMarketPlace } from "./useApiProjectMarketPlace";

export interface CartProduct extends IProjectMarketPlace {
  price?: Stripe.Price;
  product?: Stripe.Product;
  quantity: number;
  amount?: number;
}

export interface ISTore {
  sessionId: string | null;
  setSessionId(value: string | null): void;
  paymentStatus: "approved" | "pending" | null;
  setPaymentStatus(value: "approved" | "pending" | null): void;
  name: string | null;
  setName(value: string | null): void;
  email: string | null;
  setEmail(value: string | null): void;
  beneficiary: string | null;
  setBeneficiary(value: string | null): void;
  documentNumber: string;
  setDocumentNumber(value: string): void;
  referencePeriod: string;
  setReferencePeriod(str: string): void;
  additionalText: string;
  setAdditionalText(str: string): void;
  resultId: number | null;
  setResultId(value: number | null): void;
  isOpenDrawer: boolean;
  toggleDrawer(): void;
  cart: CartProduct[];
  addToCart(newItem: CartProduct): void;
  removeItem(id: number): void;
  discountCoupon: string;
  setDiscountCoupon(str: string): void;
  discount: number;
  setDiscount(num: number): void;
  resetCart(): void;
  resetAll(): void;
}

const useStore = create<ISTore>()(
  persist(
    (set) => ({
      email: null,

      setEmail: (value: string | null) => {
        set(() => {
          return {
            email: value,
          };
        });
      },

      name: null,

      setName: (value: string | null) => {
        set(() => {
          return {
            name: value,
          };
        });
      },

      beneficiary: null,

      setBeneficiary: (value: string | null) => {
        set(() => {
          return {
            beneficiary: value,
          };
        });
      },

      referencePeriod: "",

      setReferencePeriod: (value: string) => {
        set(() => {
          return {
            referencePeriod: value,
          };
        });
      },

      additionalText: "",
      setAdditionalText: (value: string) => {
        set(() => {
          return {
            additionalText: value,
          };
        });
      },

      documentNumber: "",

      setDocumentNumber: (value: string) => {
        set(() => {
          return {
            documentNumber: value,
          };
        });
      },

      sessionId: null,

      setSessionId: (value: string | null) => {
        set(() => {
          return {
            sessionId: value,
          };
        });
      },

      resultId: null,

      setResultId: (value: number | null) => {
        set(() => {
          return {
            resultId: value,
          };
        });
      },

      paymentStatus: null,
      setPaymentStatus: (value: "approved" | "pending" | null) => {
        set(() => {
          return {
            paymentStatus: value,
          };
        });
      },

      isOpenDrawer: false,

      toggleDrawer: () => {
        set((state) => {
          return {
            isOpenDrawer: !state.isOpenDrawer,
          };
        });
      },

      cart: [],

      addToCart: (newItem: CartProduct) => {
        set((state) => {
          const existItem = state.cart.find((item) => item.id === newItem.id);

          if (existItem) {
            return {
              cart: state.cart.map((item) =>
                item.id == newItem.id
                  ? { ...newItem, quantity: newItem.quantity }
                  : item
              ),
            };
          } else {
            return {
              cart: [...state.cart, { ...newItem }],
            };
          }
        });
      },

      removeItem: (id: number) => {
        set((state) => {
          return {
            cart: state.cart.filter((item) => item.id != id),
          };
        });
      },

      discountCoupon: "",
      setDiscountCoupon: (str: string) => {
        set(() => {
          return {
            discountCoupon: str,
          };
        });
      },

      discount: 0,
      setDiscount: (num: number) => {
        set(() => {
          return {
            discount: num,
          };
        });
      },

      resetCart: () => {
        set(() => {
          return {
            cart: [],
          };
        });
      },

      resetAll: () => {
        set(() => {
          return {
            cart: [],
            name: null,
            email: null,
            sessionId: null,
            resultId: null,
            discount: 0,
            discountCoupon: "",
            referencePeriod: "",
            beneficiary: "",
            additionalText: "",
            paymentStatus: null,
          };
        });
      },
    }),
    {
      name: "marketplace-cart",
    }
  )
);

export default useStore;
