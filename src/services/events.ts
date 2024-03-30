import { IEvent } from "@/hooks/useApiClients";

export const revalidate = false;

export const getEvents = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/eventos`,
    {
      headers: { Authorization: "abc" },
      // cache: "no-store",
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const events: Promise<IEvent[]> = await res.json();

  return events;
};
