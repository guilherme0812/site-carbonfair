import { ICBClient } from "@/hooks/useApiClients";
import { apiCarbonFair } from "./api";

export const getClients = async () => {
  try {
    const request = await apiCarbonFair.get("carbonfair-publico/cliente");
    const clients: ICBClient[] = request.data;

    return clients;
  } catch (error) {
    return [];
  }
};
