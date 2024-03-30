"use client";

import { useSnackbar } from "notistack";
import { useQuery } from "react-query";
import { apiCarbonFair } from "../services/api";

export interface ITotalizer {
  total_co2_compensado: string;
  total_projetos_apoiados: number;
  empresas_eventos_neutralizados: number;
}

export const useApiTotalizers = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading } = useQuery(["TOTALIZADORES"], async () => {
    try {
      const response = await apiCarbonFair.get(
        "/carbonfair-publico/totalizadores"
      );
      return response.data;
    } catch (error) {
      enqueueSnackbar("Erro interno, recarregue a página.", {
        variant: "error",
      });
    }
  });

  return {
    totalizers: data as ITotalizer,
    totalizersIsLoading: isLoading,
  };
};
