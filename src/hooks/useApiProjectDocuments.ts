"use client";

import { useSnackbar } from "notistack";
import { useQuery } from "react-query";
import { apiCarbonFair } from "../services/api";

export interface ProjectDocument {
  id: number;
  id_projeto: number;
  id_tipo_documento: number;
  des_url: string;
  num_ordem: number;
  total_comentarios: number;
}

const PROJECT_DOCUMENTS = "PROJECT_DOCUMENTS";

export const useProjectDocuments = (id_projeto: number) => {
  const { enqueueSnackbar } = useSnackbar();

  const { data, isLoading } = useQuery(
    [PROJECT_DOCUMENTS, id_projeto],
    async () => {
      try {
        const response = await apiCarbonFair.get(
          `/carbonfair-publico/projetos_documentos?id_projeto=${id_projeto}`
        );
        return response.data;
      } catch (error) {
        enqueueSnackbar("Erro interno, recarregue a página.", {
          variant: "error",
        });
      }
    }
  );

  return {
    projectDocuments: data as ProjectDocument[],
    projectDocumentsIsLoading: isLoading,
  };
};
