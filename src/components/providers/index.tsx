"use client";

import ThemeRegistry from "./ThemeRegistry";
import { SnackbarProvider } from "notistack";
import { ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme } from "@mui/material";
import { getThemeOptions } from "@/theme/theme";
import { ptBR } from "@mui/material/locale";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import { Cart } from "../patterns";
import { useZustandStore } from "@/hooks/useStore";
import useStore from "@/hooks/useCartStore";
import AOS from "aos";
import "aos/dist/aos.css";
import { TokenData } from "@/services/token";
import { apiCFCalculator, internalApiAxios } from "@/services/api";

const lightTheme = createTheme(getThemeOptions("light"), ptBR);

const queryClient = new QueryClient();

const Providers = ({
  children,
  tokenData,
}: {
  children: ReactNode;
  tokenData?: TokenData;
}) => {
  const store = useZustandStore(useStore, (state) => state);

  useEffect(() => {
    internalApiAxios.defaults.headers["Authorization"] = `${tokenData?.token}`;
    apiCFCalculator.defaults.headers["Authorization"] = `${tokenData?.token}`;
    AOS.init();
  }, []);

  return (
    <>
      <SnackbarProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeRegistry options={{ key: "mui" }}>
            <StyledComponentsRegistry>
              <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <Cart
                  open={store?.isOpenDrawer}
                  onClose={() => store?.toggleDrawer()}
                />
                {children}
              </ThemeProvider>
            </StyledComponentsRegistry>
          </ThemeRegistry>
        </QueryClientProvider>
      </SnackbarProvider>
    </>
  );
};

export default Providers;
