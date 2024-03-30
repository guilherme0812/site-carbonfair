import { apiCarbonFair } from "@/services/api";
import { UseQueryOptions, useMutation } from "react-query";
import { useSnackbar } from "notistack";
import axios from "axios";

export interface sendCartBody {
  id_resultado: string | number | null;
  num_credito: number;
  num_valor: number;
  id_sessao: string | null;
  des_nome: string | null;
  des_email: string | null;
  des_beneficiario: string;
  des_texto_adicional: string;
  id_payment: string;
  des_cpf_cnpj: string;
  itens: Item[];
  des_periodo_referente: string;
  cupom: string;
}

export interface Item {
  id_projeto: number;
  num_credito: number;
  vlr_credito: number;
}

export const sendCard = (queryParams?: UseQueryOptions) => {
  const { enqueueSnackbar } = useSnackbar();

  const { mutateAsync, isLoading } = useMutation(
    async (values: sendCartBody) =>
      axios({
        method: "POST",
        url: "/api/cart",
        data: values,
      }),
    {
      ...(queryParams as any),

      onError() {
        enqueueSnackbar("Houve um erro inesperado, tente novamente!", {
          variant: "error",
        });
      },
    }
  );

  return {
    sendCart: mutateAsync,
    isLoading,
  };
};
