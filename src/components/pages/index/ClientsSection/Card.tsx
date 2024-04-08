"use client";

import * as React from "react";
import styled, { css } from "styled-components";
import { Box, Typography } from "@mui/material";
import { Button } from "../../../../components/ui";
import { ICBClient } from "../../../../hooks/useApiClients";
import { LangType } from "@/services/getPages";
import Link from "next/link";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

interface ContainerProps {
  active: boolean;
}

interface CardProps extends ICBClient {
  active: boolean;
  lang: LangType;
  extraLinks: I18nTexts;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  align-content: space-between;
  text-align: center;
  background-color: ${(props: any) => props.theme.palette.background.paper};
  border-radius: 8px;
  box-shadow: ${(props: any) => props.theme.shadows[4]};
  margin: 40px 20px;
  padding: 20px;
  min-height: 250px;

  img.logo {
    display: block;
    max-height: 60px;
    margin: auto;
  }

  @media (min-width: 900px) {
    ${(props: any) =>
      props.active &&
      css`
        transform: scale(1.15);
      `}
  }
`;

const Card = ({
  active,
  des_nome,
  des_logo,
  des_identificador,
  txt_descricao,
  lang,
  extraLinks,
}: CardProps) => {
  const { t } = useI18n(extraLinks);

  return (
    <Container active={active}>
      <Typography sx={{ fontWeight: "bold", color: "GrayText" }}>
        {des_nome}
      </Typography>
      <Typography component="p" variant="body2" color="GrayText">
        {txt_descricao.length > 210
          ? txt_descricao.slice(0, 200) + "..."
          : txt_descricao}
      </Typography>

      <Box>
        <img className="logo" src={des_logo} alt={`logo ${des_nome}`} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "50%" }}>
          <Link href={`/${lang}/${t("lnk-dbc32485")}/${des_identificador}`}>
            <Button variant="contained" fullWidth>
              Conheça
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
export default Card;
