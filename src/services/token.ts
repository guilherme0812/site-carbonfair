import axios from "axios";
import { v4 } from "uuid";

export interface TokenData {
  token: string;
  personalizacoes: ICustom;
  calculatorHost: string;
}

export type CompensationType = 1 | 2 | 3 | 4 | 5;
// 1 PIX AND CARD
// 2 PIX
// 3 Link
// 4 CARD
// 5 PIX without cartItens (vagalume)

export interface ICustom {
  calculadoras: ICalculatorPermissions;
  design: IDesign;
  ano_referente: number;
  id_empresa: number;
  nome_empresa: string;
  link_neutralizacao: string;
  link_site_empresa: string;
  link_calculadora: string;
  tipo_compensacao: CompensationType;
  neutralizar_carbono_pf: boolean;
  neutralizar_carbono_trajeto: boolean;
  neutralizar_carbono_pj: boolean;
  textos_email: {
    texto_1: string;
    texto_2: string;
    texto_3: string;
    texto_4: string;
  };
  gateway: 1 | 2;
}

export interface IDesign {
  palette: any;
  logo: string;
  banner: string;
  calculadora_gradiente: number[][];
  texto_botao_saiba_mais: string;
  texto_botao_neutralizar: string;
  id_projeto: number;
}

export interface ICalculatorPermissions {
  calculadora_pf: boolean;
  calculadora_pj: boolean;
  calculadora_evento: boolean;
  calculadora_trajeto: boolean;
}

export const getToken = async () => {
  const headers = {
    session_id: v4(),
    "X-Forwarded-Host": process.env.NEXT_PUBLIC_CALCULATOR_HOST,
  };

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_CALCULADORA_BACKEND_API}/token`,
    {
      headers: headers,
    }
  );

  const { data } = res;

  return {
    ...data,
    calculatorHost: process.env.DEVELOPMENT_CALCULATOR_HOST,
  } as TokenData | undefined;
};
