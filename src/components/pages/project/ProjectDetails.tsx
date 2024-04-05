"use client";

import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { ICBProject } from "../../../hooks/useApiProjects";
import { titleProps } from "@/styles/global";
import Image from "next/image";

const Container = styled.section`
  box-sizing: border-box;
  .selos {
    display: flex;
    justify-content: space-between;
  }
  /* .selos img {
    max-width: 100px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 0.5rem;
  }

  .selos img:hover {
    transform: scale(1.5);
    box-shadow: 0px 25px 33px -10px #616161;
  } */
`;

const ProjectDetails = (project: ICBProject) => {
  return (
    <Container>
      <div className="container">
        <div className="selos">
          <Grid container spacing={8} justifyContent="center">
            {project?.ods?.map((ods, index) => (
              <Grid item xs={4} md={1.5} key={index}>
                <Image
                  width={70}
                  height={70}
                  alt={ods.des_ods}
                  src={ods.des_url_imagem}
                  className="rounded hover:scale-125 transition"
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <Typography {...(titleProps as any)} sx={{ my: "2rem" }}>
          {project.des_projeto}
        </Typography>

        <p className="whitespace-pre-line text-gray-600 text-base">
          {project.txt_descricao_detalhada}
        </p>
      </div>
    </Container>
  );
};

export default ProjectDetails;
