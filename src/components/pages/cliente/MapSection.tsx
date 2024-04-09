"use client";
import { useApiCBProjects, useApiProjects } from "@/hooks/useApiProjects";
import nextDynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IMarker } from "../../../components/ui/Map";
import { LangType } from "@/services/getPages";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";
import { Skeleton } from "@mui/material";

const Map = nextDynamic(() => import("../../../components/ui/Map"), {
  ssr: false,
});

function MapSection({
  projectIds,
  extraLinks,
  lang,
}: {
  projectIds: number[];
  lang: LangType;
  extraLinks: I18nTexts;
}) {
  const { projects, projectsIsLoading } = useApiCBProjects();
  const { t: links } = useI18n(extraLinks); // label: project | projeto

  const [markers, setMarkers] = useState<IMarker[]>([]);

  useEffect(() => {
    if (projects) {
      const projectsFiltered = projects.filter((project) =>
        projectIds.includes(project.id)
      );

      const projectsMarkers: IMarker[] = projectsFiltered.map((project) => ({
        biome: project.des_bioma,
        kg: Number(project.num_kg_co2),
        latY: Number(project.des_latitude),
        lonX: Number(project.des_longitude),
        local: project.des_cidade,
        name: project.des_projeto,
        projectDefault: project.des_padrao,
        type: project.des_tipo_projeto,
        link: "/projeto/" + project.des_url_prefix,
      }));

      setMarkers(projectsMarkers);
    }
  }, [projects]);

  return (
    <div>
      {!projectsIsLoading ? (
        <Map markers={[...markers]} />
      ) : (
        <Skeleton variant="rounded" sx={{ height: 400 }} />
      )}
    </div>
  );
}

export default MapSection;
