"use client";

import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { titleProps } from "../../../styles/global";
import { ICBProject } from "@/hooks/useApiProjects";
import { DataSection } from "@/components/ui";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const ProjectData = ({
  project,
  texts,
}: {
  project: ICBProject;
  texts: I18nTexts;
}) => {
  const { t } = useI18n(texts);

  return (
    <DataSection className="container">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography {...(titleProps as any)} sx={{ mb: 2 }}>
            {t("lbl-9888ef40")}
          </Typography>
        </Grid>

        {project?.num_kg_co2 && (
          <Grid item xs={12} md={4}>
            <div className="value">
              {new Intl.NumberFormat("pt-BR").format(
                Number(project.num_kg_co2)
              )}
            </div>
            <p
              className="whitespace-pre-line text-gray-600"
              dangerouslySetInnerHTML={{ __html: t("txt-56a2341a") }}
            />
          </Grid>
        )}

        {project?.num_arvores_plantadas && (
          <Grid item xs={12} md={4}>
            <div className="value">
              {new Intl.NumberFormat("pt-BR").format(
                Number(project.num_arvores_plantadas)
              )}
            </div>
            <p
              className="whitespace-pre-line text-gray-600"
              dangerouslySetInnerHTML={{ __html: t("txt-3a1fba8c") }}
            />
          </Grid>
        )}

        {project?.num_pessoas_beneficiadas && (
          <Grid item xs={12} md={4}>
            <div className="value">
              {new Intl.NumberFormat("pt-BR").format(
                Number(project.num_pessoas_beneficiadas)
              )}
            </div>
            <p
              className="whitespace-pre-line text-gray-600"
              dangerouslySetInnerHTML={{ __html: t("txt-bc99bd8c") }}
            />
          </Grid>
        )}
      </Grid>
    </DataSection>
  );
};

export default ProjectData;
