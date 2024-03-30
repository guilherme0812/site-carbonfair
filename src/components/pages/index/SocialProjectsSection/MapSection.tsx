"use client";

// import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";
import { useApiProjects } from "../../../../hooks/useApiProjects";
import { IMarker } from "../../../ui/Map";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../../ui/Map"), {
  ssr: false,
});
const Container = styled.div``;

const MapSection = () => {
  const [markers, setMarkers] = React.useState<IMarker[]>([]);
  const { projects } = useApiProjects();

  React.useEffect(() => {
    if (projects) {
      const newMarkers: IMarker[] = projects.map((project) => ({
        biome: project.ENPDados.bioma,
        kg: project.ENPDados.indicador_kg_co,
        latY: project.ENPPin.y,
        lonX: project.ENPPin.x,
        local: project.ENPDados.local,
        name: project.ENPNome,
        projectDefault: project.ENPDados.padrao,
        type: project.ENPDados.tipo_projeto,
        link: "/projeto/" + project.ENPIdentificador,
      }));

      setMarkers(newMarkers);
    }
  }, [projects]);

  return (
    <Container>
      <Map markers={markers} />
    </Container>
  );
};
export default MapSection;
