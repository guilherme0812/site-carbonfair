"use client";

import { SecondaryTabsCarbonFair } from "@/components/patterns";
import { useRouter } from "next/navigation";

function TabsChoose() {
  const router = useRouter();
  return (
    <div className="max-w-[450px] m-auto mb-2">
      <SecondaryTabsCarbonFair
        value={0}
        options={[
          { label: "Sumário", id: "#sumario" },
          { label: "Indicadores", id: "#indicadores" },
          { label: "Detalhes", id: "#detalhes" },
          { label: "Localização", id: "#localizacao" },
        ]}
        handleClick={(option) => router.push(option.id as string)}
      />
    </div>
  );
}

export default TabsChoose;
