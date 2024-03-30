"use client";

import { Box, Typography } from "@mui/material";
import * as React from "react";
import styled, { css } from "styled-components";
import { Button } from "../../ui";
import { ICBProject } from "../../../hooks/useApiProjects";
import { IoPinOutline, IoEarthOutline, IoLeafOutline } from "react-icons/io5";
import { BsTree } from "react-icons/bs";
import { TbPlant } from "react-icons/tb";

interface CardProps extends ICBProject {
  shadow?: boolean;
}

interface ContainerProps {
  background: string;
  shadow?: boolean;
}

const Container = styled.div<ContainerProps>`
  /* min-height: 400px; */
  background-color: ${(props) => props.theme.palette.background.paper};
  margin: 2rem 1.5rem;
  border-radius: 8px;
  gap: 20px;
  margin-bottom: 100px;

  .content {
    padding: 20px 40px;
    display: grid;
    align-content: space-between;
    min-height: 340px;
    gap: 20px;
  }

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: ${(props) => props.theme.shadows[4]};
    `}

  .background-container {
    min-height: 150px;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .button-container {
    width: 200px;
    margin: auto;
    /* width: 100%; */
    /* margin: auto; */
    transform: translateY(20px);
  }
`;

const ProjectCard = (project: CardProps) => {
  const typographyProps = {
    component: "p",
    variant: "body2",
    align: "center",
    color: "GrayText",
    mb: "1rem",
  };

  const itemStyle = {
    display: "flex",
    gap: "15px",
  };

  const iconColor = "#6CA640";

  return (
    <Container background={project.des_url_capa} shadow={project.shadow}>
      <div className="background-container"></div>

      <Box className="content">
        <Box sx={{ minHeight: 70 }}>
          <Typography
            component="h3"
            variant="h6"
            align="center"
            sx={{ fontWeight: "bold", mb: "0.5rem" }}
          >
            {project.des_projeto}
          </Typography>
        </Box>

        <Box>
          <Box sx={{ ...itemStyle }}>
            <IoLeafOutline size={20} color={iconColor} />

            <Typography {...(typographyProps as any)}>
              {new Intl.NumberFormat("pt-BR").format(
                project.num_kg_co2 ? Number(project.num_kg_co2) : 0
              )}{" "}
              ton de CO<sub>2eq</sub>
            </Typography>
          </Box>

          <Box
            sx={{
              ...itemStyle,
            }}
          >
            <IoPinOutline size={20} color={iconColor} />
            <Typography className="dots" {...(typographyProps as any)}>
              {project.des_cidade.length > 20
                ? project.des_cidade.slice(0, 20) + "..."
                : project.des_cidade}
            </Typography>
          </Box>

          <Box sx={{ ...itemStyle }}>
            <IoEarthOutline size={20} color={iconColor} />
            <Typography {...(typographyProps as any)}>
              {project.des_tipo_projeto}
            </Typography>
          </Box>

          <Box sx={{ ...itemStyle }}>
            <TbPlant size={20} color={iconColor} />
            <Typography {...(typographyProps as any)}>
              {project.des_padrao}
            </Typography>
          </Box>
          <Box sx={{ ...itemStyle }}>
            <BsTree size={20} color={iconColor} />
            <Typography {...(typographyProps as any)}>
              {project.des_bioma}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="button-container">
        <a href={`/projeto/${project.des_url_prefix}`}>
          <Button fullWidth variant="contained">
            Conheça!
          </Button>
        </a>
      </Box>
    </Container>
  );
};
export default ProjectCard;
