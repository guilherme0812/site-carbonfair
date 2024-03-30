import { UseQueryOptions, useQuery } from "react-query";
import { useSnackbar } from "notistack";
import { apiCarbonFair } from "../services/api";

export interface IProjectMarketPlace {
  id: number;
  id_cliente: number;
  id_projeto: number;
  id_registro_carbono_origem: number;
  id_gateway: string;
  num_carbon_saldo: number;
  des_projeto: string;
  des_simbolo: string;
  des_url: string;
  des_padrao: string;
  des_bioma: string;
  des_pais: string;
  des_cidade: string;
  vlr_carbon_fair: string;
  vlr_passagem: string;
  vlr_calculadora: string;
  vlr_frete: string;
  vlr_market_place: string;
  vlr_preco: number;
  txt_descricao_marketplace?: string;
}

export const useProjectMarketPlace = (options?: UseQueryOptions) => {
  const { enqueueSnackbar } = useSnackbar();

  const { data, isLoading } = useQuery(
    ["PROJECT_MARKET_PLACE"],
    async () => {
      try {
        const response = await apiCarbonFair(
          "/carbonfair-publico/projetos_market_place"
        );
        return response.data as IProjectMarketPlace[];
      } catch (error) {
        enqueueSnackbar("Erro interno, recarregue a página.", {
          variant: "error",
        });
      }
    },
    {
      ...(options as any),
    }
  );

  return { data, isLoading };
};
