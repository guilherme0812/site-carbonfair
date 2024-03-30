"use client";

import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { titleProps } from "../../../styles/global";
import { ICBProject } from "@/hooks/useApiProjects";
import { DataSection } from "@/components/ui";

const ProjectData = (project: ICBProject) => {
  return (
    <DataSection className="container">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography {...(titleProps as any)} sx={{ mb: 2 }}>
            Indicadores deste projeto
          </Typography>
        </Grid>

        {project.num_kg_co2 && (
          <Grid item xs={12} md={4}>
            <div className="value">
              {new Intl.NumberFormat("pt-BR").format(
                Number(project.num_kg_co2)
              )}
            </div>
            <div className="label">
              ton de CO<sub>2eq</sub>
            </div>
          </Grid>
        )}

        {project.num_arvores_plantadas && (
          <Grid item xs={12} md={4}>
            <div className="value">
              {new Intl.NumberFormat("pt-BR").format(
                Number(project.num_arvores_plantadas)
              )}
            </div>
            <div className="label">Árvores</div>
          </Grid>
        )}

        {project.num_pessoas_beneficiadas && (
          <Grid item xs={12} md={4}>
            <div className="value">
              {new Intl.NumberFormat("pt-BR").format(
                Number(project.num_pessoas_beneficiadas)
              )}
            </div>
            <div className="label">Pessoas beneficiadas</div>
          </Grid>
        )}
      </Grid>
    </DataSection>
  );
};

export default ProjectData;
