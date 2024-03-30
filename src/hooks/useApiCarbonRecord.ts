"use client";

import { useQuery } from "react-query";
import { useSnackbar } from "notistack";
import { apiCarbonFair } from "../services/api";

export interface CarbonRecord {
  id: number;
  id_cliente: number;
  id_status_registro: number;
  id_projeto: number;
  id_tipo_verificacao: number;
  id_empresa_verificadora: number;
  des_texto_adicional: string;
  des_url_externa: string;
  dta_vintage_inicio: string;
  dta_vintage_final: string;
  num_serial: string;
  num_bloco_inicio: number;
  num_bloco_final: number;
  num_credito_carbono: number;
  des_beneficial: string;
  des_url_prefix: string;
  num_carbon_saldo: string;
  num_carbon_estoque: string;
  id_tipo_lancamento: number;
  des_cliente: string;
  des_projeto: string;
  des_tipo_verificacao: string;
  des_empresa_verificadora: string;
  des_status_registro: string;
}
interface ApiCarbonRecordsProps {
  PageNum?: number;
  busca?: string;
}

interface CarbonRecordData {
  status: string;
  num_results: string;
  current_page: number;
  has_next: boolean;
  pages: number[];
  items: {
    parceiro: string;
    projetos_apoiados: string;
    link_neutralizacao: string;
    data: string;
  }[];
}

// export const useApiOffsetCarbonRecord = ({
//     id_registro,
// }: CarbonApiRecordProps) => {
//     const { enqueueSnackbar } = useSnackbar();
//     const { data, isLoading } = useQuery(
//         ["Emission_Management", id_registro],
//         async () => {
//             try {
//                 const response = await axios.get(
//                     `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/registro_carbono_aposentado?id_registro=${id_registro}`,
//                     {
//                         headers: {
//                             Authorization: "abc",
//                         },
//                     }
//                 );
//                 return response.data;
//             } catch (error) {
//                 enqueueSnackbar("Erro interno, recarregue a página.", {
//                     variant: "error",
//                 });
//             }
//         },
//         {
//             initialData: [],
//         }
//     );

//     return { data: data as CarbonRecord[], isLoading };
// };

export const useApiPublicCarbonRecords = (des_projeto?: string) => {
  const { enqueueSnackbar } = useSnackbar();

  const desProjeto = des_projeto && `?des_projeto=${des_projeto}`;

  const { data, isLoading } = useQuery(
    ["ALL_CARBON", des_projeto],
    async () => {
      try {
        const response = await apiCarbonFair.get(
          `/carbonfair-publico/registros_carbono${desProjeto ?? ""}`
        );
        return response.data;
      } catch (error) {
        enqueueSnackbar("Erro interno, recarregue a página.", {
          variant: "error",
        });
      }
    },
    {
      initialData: [],
    }
  );

  return { data: data as CarbonRecord[], isLoading };
};

export const useApiCarbonRecords = ({
  PageNum,
  busca,
}: ApiCarbonRecordsProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading } = useQuery(
    ["carbonRecords", PageNum, busca],
    async () => {
      try {
        const response = await apiCarbonFair.get(
          `/carbonfair-publico/registros_antigos?PageNum=${PageNum}&busca=${busca}`
        );
        return response.data;
      } catch (error) {
        enqueueSnackbar("Erro interno, recarregue a página.", {
          variant: "error",
        });
      }
    },
    {
      // initialData: {},
    }
  );

  return { carbonRecords: data as CarbonRecordData, isLoading };
};
