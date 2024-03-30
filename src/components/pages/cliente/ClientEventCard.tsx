"use client";

import styled from "styled-components";
import { IEvent } from "../../../hooks/useApiClients";
import { Box, Tooltip, Typography } from "@mui/material";
import { IoLeafOutline, IoAccessibilityOutline } from "react-icons/io5";
import { BsTree } from "react-icons/bs";
import Link from "next/link";

interface ContainerProps {
  background: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.palette.background.paper};
  margin: 20px 10px;
  border-radius: 8px;
  cursor: pointer;
  border-top: 10px solid ${(props) => props.theme.palette.background.paper};

  .banner-container {
    min-height: 80px;
    background-image: url(${(props) => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content {
    min-height: 200px;
    color: #000;
    padding: 20px;

    display: grid;
    align-content: space-between;
    transition: 300ms;

    .icon-container {
      display: flex;
      gap: 20px;
    }
  }
`;

export interface ClientEventCardProps {
  data: IEvent;
  url: string;
}

const ClientEventCard = ({ data, url }: ClientEventCardProps) => {
  return (
    <Tooltip title={"Selecionar evento"} placement="top">
      <Link href={`${url}/${data.des_identificador}`}>
        <Container background={data.des_banner}>
          <div className="banner-container"></div>
          <div className="content">
            <Typography align="center" variant="subtitle2" fontWeight="bold">
              {data.des_nome}
            </Typography>

            <div>
              <Box className="icon-container" sx={{ mb: "5px" }}>
                <IoLeafOutline />

                <Typography>{parseInt(data.num_kg_co2 ?? 0)}</Typography>
              </Box>
              <Box className="icon-container" sx={{ mb: "5px" }}>
                <BsTree />

                <Typography>
                  {parseInt(data.num_arvores_plantadas ?? 0)}
                </Typography>
              </Box>
              <Box className="icon-container">
                <IoAccessibilityOutline />

                <Typography>
                  {parseInt(data.num_total_apoiadores ?? 0)}
                </Typography>
              </Box>
            </div>

            <Typography align="center" variant="body1">
              Ver mais
            </Typography>
          </div>
        </Container>
      </Link>
    </Tooltip>
  );
};

export default ClientEventCard;
