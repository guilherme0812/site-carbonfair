import axios from "axios";

export const apiCarbonFair = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}`,
  headers: { Authorization: "abc" },
});

export const apiCFCalculator = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CALCULADORA_BACKEND_API}`,
  // headers: { Authorization: 'abc' },
});

export const calculatorInternalApiAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CALCULADORA_NEXT_API}/api`,
});

export const internalApiAxios = axios.create({
  baseURL: "/api",
});

export const apiFreteNeutro = axios.create({
  baseURL: "https://api.freteneutro.com.br",
});

export const apiEccaPlan = axios.create({
  baseURL: "https://eccaplan.com.br",
});
