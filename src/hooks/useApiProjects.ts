"use client";
import { useMutation, useQuery } from "react-query";
import { useSnackbar } from "notistack";
import { apiCarbonFair, apiFreteNeutro } from "../services/api";

export interface IProject {
  ENProjetoID: number;
  ENPIdentificador: string;
  ENPNome: string;
  ENPCapa: {
    ext: string;
    nome: string;
    checksum: string;
  };
  ENPDados: {
    ods: number[];
    bioma: string;
    local: string;
    padrao: string;
    // eslint-disable-next-line
    apoiadores: string[];
    youtube_id: string;
    tipo_projeto: string;
    frase_apoiador: string;
    indicador_kg_co: number;
    frase_assinatura: string;
    total_apoiadores: number;
    descricao_simples: string;
    descricao_detalhada: string;
    indicador_arvore_plantada: number;
    indicador_pessoa_beneficiada: number;
  };
  ENPPin: {
    x: number;
    y: number;
  };
  ENPGeoJSON: string;
  ENPNewsletterAtivo: number;
  ENPAtivo: number;
  ENPDataCadastro: string;
}

export interface ICBProject {
  id: number;
  num_cnpj: string;
  des_projeto: string;
  id_status_projeto: number;
  id_tipo_projeto: number;
  id_pais: number;
  des_certificacao: string;
  txt_descricao_simples: string;
  txt_descricao_detalhada: string;
  id_bioma: number;
  des_youtube_id: string;
  bol_newsletter: boolean;
  txt_descricao_marketplace: string;
  des_latitude: string;
  des_longitude: string;
  id_cidade: number;
  des_url_capa: any;
  des_url_prefix: string;
  des_frase_apoiador: string;
  id_padrao: number;
  id_conta: number;
  des_tipo_projeto: string;
  des_status_projeto: string;
  des_bioma: string;
  des_cidade: string;
  des_padrao: string;
  documentos: IDocument[];
  num_kg_co2: null | string;
  num_arvores_plantadas: null | string;
  num_pessoas_beneficiadas: null | string;
  num_total_apoiadores: null | string;
  ods: Od[];
}

export interface IDocument {
  id: number;
  id_projeto: number;
  id_tipo_documento: number;
  des_url: string;
  num_ordem: number;
}

export interface Od {
  id: number;
  id_projeto: number;
  id_ods: number;
  des_ods: string;
  des_url_imagem: string;
}

export interface ImageReq {
  Key: string;
  LastModified: string;
  Size: number;
}

const PROJECTS = "projects";

export const useApiProjects = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading } = useQuery(
    [PROJECTS],
    async () => {
      try {
        const response = await apiFreteNeutro.get("/carbonfair/projetos");
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

  return { projects: data as IProject[], projectsIsLoading: isLoading };
};

const PROJECT_CB = "PROJECTS_CARBON_FAIR";

export const useApiCBProjects = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading } = useQuery(
    [PROJECT_CB],
    async () => {
      try {
        const response = await apiCarbonFair.get("carbonfair-publico/projetos");
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

  return { projects: data as ICBProject[], projectsIsLoading: isLoading };
};

export const useSendNewLetter = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { mutateAsync } = useMutation(
    // eslint-disable-next-line
    (values: any) =>
      apiFreteNeutro({
        method: "POST",
        url: "/carbonfair/newsletter",
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

  return { sendNewLetter: mutateAsync };
};

// GET IMAGES
export const useImageList = (id?: number) => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading } = useQuery(["IMAGE_LIST", id], async () => {
    if (id) {
      try {
        const response = await apiCarbonFair.get(
          `/carbonfair-publico/projeto_imagens?id_projeto=${id}`
        );
        return response.data;
      } catch (error) {
        enqueueSnackbar("Erro interno, recarregue a página.", {
          variant: "error",
        });
      }
    } else {
      return [];
    }
  });

  return { imageList: data as ImageReq[], imageListIsLoading: isLoading };
};
