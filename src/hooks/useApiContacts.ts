"use client";

import { useMutation } from "react-query";
import { useSnackbar } from "notistack";
import { apiFreteNeutro } from "../services/api";

export interface MessageBody {
  email: string;
  mensagem: string;
  nome: string;
  nome_empresa: string;
}

export const useSendMessage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { mutateAsync } = useMutation(
    // eslint-disable-next-line
    (values: MessageBody) =>
      apiFreteNeutro({
        method: "POST",
        url: "/adm/contato",
        data: {
          ...values,
        },
      }),

    {
      onSuccess() {
        enqueueSnackbar("Mensagem enviada com sucesso!", {
          variant: "success",
        });
      },
      onError: () => {
        enqueueSnackbar("Erro interno, tente novamente.", {
          variant: "error",
        });
      },
    }
  );

  return { sendMessage: mutateAsync };
};
