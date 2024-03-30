"use client";

import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { ICBProject } from "../../../hooks/useApiProjects";
import { titleProps } from "@/styles/global";

const Container = styled.section`
  box-sizing: border-box;
  .selos {
    display: flex;
    justify-content: space-between;
  }
  .selos img {
    max-width: 100px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 0.5rem;
  }

  .selos img:hover {
    transform: scale(1.5);
    box-shadow: 0px 25px 33px -10px #616161;
  }
`;

const ProjectDetails = (project: ICBProject) => {
  return (
    <Container>
      <div className="container">
        <div className="selos">
          <Grid container spacing={8} justifyContent="center">
            {project?.ods?.map((ods, index) => (
              <Grid item xs={4} md={1.5} key={index}>
                <img key={index} src={ods.des_url_imagem} alt={ods.des_ods} />
              </Grid>
            ))}
          </Grid>
        </div>
        <Typography {...(titleProps as any)} sx={{ my: "2rem" }}>
          {project.des_projeto}
        </Typography>
        <Typography style={{ whiteSpace: "pre-wrap" }}>
          {project.txt_descricao_detalhada}
        </Typography>
      </div>
    </Container>
  );
};

export default ProjectDetails;
