"use client";

import { useSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { apiCarbonFair } from "../services/api";

export interface IComment {
  id: number;
  id_documento: number;
  des_comentario: string;
  des_resposta: null | string;
  des_nome: string;
  tis_comentario: string;
}

export interface CommentBody {
  id_documento: number;
  des_nome: string;
  des_comentario: string;
}

const COMMENTS = "COMMENTS";

export const useComments = (id_documento: number) => {
  const { enqueueSnackbar } = useSnackbar();

  const { data, isLoading } = useQuery([COMMENTS, id_documento], async () => {
    try {
      const response = await apiCarbonFair.get(
        `/carbonfair-publico/projeto/comentarios?id_documento=${id_documento}`
      );
      return response.data;
    } catch (error) {
      enqueueSnackbar("Erro interno, recarregue a página.", {
        variant: "error",
      });
    }
  });

  return {
    comments: data as IComment[],
    commentsIsLoading: isLoading,
  };
};

export const useAddComment = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(
    (body: CommentBody) =>
      apiCarbonFair({
        method: "POST",
        url: "/carbonfair-publico/projeto/comentario",
        data: {
          ...body,
        },
      }),
    {
      onSuccess() {
        queryClient.invalidateQueries(COMMENTS);
        enqueueSnackbar("Cadastro realizado com sucesso!", {
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

  return { addComment: mutateAsync };
};
