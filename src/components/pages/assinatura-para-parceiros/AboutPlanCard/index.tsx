"use client";

import { ResponsiveImage } from "@/components/ui";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export interface IAboutPlanCard {
  src: string;
  title: string;
  amount: number;
}

const Container = styled.div`
  display: grid;
  min-height: 300px;
  width: 200px;
  padding: 20px;
  align-content: space-between;
  box-shadow: ${(props) => props.theme.shadows[5]};
  border-radius: 8px;
`;

const AboutPlanCard = ({ title, amount, src }: IAboutPlanCard) => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ResponsiveImage src={src} alt="Icone" width={80} height={80} />
      </Box>

      <Typography align="center" fontWeight="bold">
        {title}
      </Typography>
      <Typography
        align="center"
        fontWeight="bold"
        color="primary.main"
        variant="h6"
      >
        {new Intl.NumberFormat("pt-BR", {
          currency: "BRL",
        }).format(Number(amount))}
      </Typography>
      <div></div>
    </Container>
  );
};

export default AboutPlanCard;
