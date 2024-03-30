import { ICBProject } from "@/hooks/useApiProjects";
import { apiCarbonFair } from "./api";

export const revalidate = 3000;

export const getProjects = async () => {
  try {
    const request = await apiCarbonFair.get("carbonfair-publico/projetos");
    return request.data as ICBProject[];
  } catch (error) {
    return [];
  }
};
