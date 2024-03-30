import { useQuery } from "react-query"
import { useSnackbar } from "notistack"
import { apiCarbonFair, apiFreteNeutro } from "../services/api"

export interface IClients {
    ENClienteID: number
    ENCIdentificador: string
    ENCNome: string
    ENCLogo: {
        ext: string
        nome: string
        checksum: string
    }
    ENCDescricao: string
    ENCAtivo: number
    ENCDataCadastro: string
}

export interface ICBClient {
    id: number
    bol_ativo: boolean
    des_nome: string
    des_logo: string
    txt_descricao: string
    des_identificador: string
    num_kg_co2: string
    num_arvores_plantadas: number
    num_total_apoiadores: number
}

export interface IClientEvent {
    ENEventoID: number
    ENProjetoID: number
    ENEIdentificador: string
    ENENome: string
    ENEDados: {
        apoiadores: any
        frase_apoiador: string
        indicador_kg_co: number
        frase_assinatura: string
        total_apoiadores: number
        descricao_simples: string
        descricao_detalhada: string
        indicador_arvore_plantada: number
    }
    ENEDataCadastro: string
}

export interface ICBClientEvent {
    id: number
    des_nome: string
    des_logo: string
    txt_descricao: string
    des_identificador: string
    bol_ativo: boolean
    num_kg_co2: string
    num_arvores_plantadas: number
    num_total_apoiadores: number
    eventos: IEvent[]
}

export interface IEvent {
    id: number
    des_nome: string
    id_projeto: number
    dta_inicio: string
    dta_final: string
    txt_descricao_simples: string
    txt_descricao_detalhada: string
    id_cliente: number
    bol_ativo: boolean
    des_identificador: string
    des_banner: string
    num_kg_co2: string
    num_arvores_plantadas: string
    num_pessoas_beneficiadas: string
    num_total_apoiadores: string
    des_apoiadores: string[] | null
    imagens: IImage[]
}

export interface IImage {
    id: number
    id_evento: number
    des_nome: string
    des_slug: string
    num_ordem: number
    bol_ativo: boolean
    des_url: string
}

const CLIENTS = "clients"
const CB_CLIENTS = "CLIENTS_CARBON_FAIR"

export const useApiClients = () => {
    const { enqueueSnackbar } = useSnackbar()
    const { data, isLoading } = useQuery(
        [CLIENTS],
        async () => {
            try {
                const response = await apiFreteNeutro.get(
                    "/carbonfair/clientes"
                )
                return response.data
            } catch (error) {
                enqueueSnackbar("Erro interno, recarregue a página.", {
                    variant: "error",
                })
            }
        },
        {
            initialData: [],
        }
    )

    return { clients: data as IClients[], isLoading }
}

export const useApiCBClients = () => {
    const { enqueueSnackbar } = useSnackbar()
    const { data, isLoading } = useQuery([CB_CLIENTS], async () => {
        try {
            const response = await apiCarbonFair.get(
                "/carbonfair-publico/clientes"
            )
            return response.data
        } catch (error) {
            enqueueSnackbar("Erro interno, recarregue a página.", {
                variant: "error",
            })
        }
    })

    return { clients: data as ICBClient[], clientsIsLoading: isLoading }
}

export const useClientEvent = (id: number) => {
    const { enqueueSnackbar } = useSnackbar()
    const { data, isLoading } = useQuery(
        ["EVENTS_CLIENT", id],
        async () => {
            try {
                const response = await apiCarbonFair.get(
                    `/carbonfair-publico/cliente_eventos?id_cliente=${id}`
                )
                return response.data
            } catch (error) {
                enqueueSnackbar("Erro interno, recarregue a página.", {
                    variant: "error",
                })
            }
        }
        // {
        //     initialData: [],
        // }
    )

    return {
        clientEvent: data as IClientEvent[],
        clientEventIsLoading: isLoading,
    }
}

export const useCBClientEvent = (id: number) => {
    const { enqueueSnackbar } = useSnackbar()
    const { data, isLoading } = useQuery(
        ["EVENTS_CLIENT", id],
        async () => {
            try {
                const response = await apiCarbonFair.get(
                    `/carbonfair-publico/cliente_eventos?id_cliente=${id}`
                )
                return response.data
            } catch (error) {
                enqueueSnackbar("Erro interno, recarregue a página.", {
                    variant: "error",
                })
            }
        }
        // {
        //     initialData: [],
        // }
    )

    return {
        clientEvent: data as ICBClientEvent,
        clientEventIsLoading: isLoading,
    }
}
