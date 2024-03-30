"use client";

import { useQuery } from "react-query";
import { useSnackbar } from "notistack";
import { apiCarbonFair } from "../services/api";

export interface IOds {
  id: number;
  id_pais: number;
  des_objetivo: string;
  num_codigo: number;
  des_url_imagem: string;
}

const ALL_ODS = "ALL_ODS";

export const useApiOds = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading } = useQuery([ALL_ODS], async () => {
    try {
      const response = await apiCarbonFair.get("/carbonfair-publico/many_ods");
      return response.data;
    } catch (error) {
      enqueueSnackbar("Erro interno, recarregue a página.", {
        variant: "error",
      });
    }
  });

  return { ods: data as IOds[], odsIsLoading: isLoading };
};
