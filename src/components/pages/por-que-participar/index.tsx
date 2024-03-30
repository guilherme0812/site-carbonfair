"use client";

import React from "react";
import { NewLetter, Header as NewHeader } from "../../patterns";
import Header from "./Header";
import { Box, Grid, Theme, Typography } from "@mui/material";
import HowToKnowSection from "./HowToKnowSection";
import {
  IoBulbOutline,
  IoShieldCheckmarkOutline,
  IoEarthOutline,
  IoCalendarClearOutline,
} from "react-icons/io5";
import { TbCoin } from "react-icons/tb";
import { useTheme } from "@emotion/react";
import { useI18n } from "@/hooks/useI18n";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";

const WhyParticipatePage = ({
  texts,
  lang,
}: {
  texts: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);
  const theme = useTheme();

  return (
    <>
      <NewHeader
        url="/background/porque-participar.jpg"
        backgroundStyle={{ backgroundPosition: "center 70%" }}
      >
        <HeaderDefaultContent title={t("lbl-823b4802")} lang={lang} />
        <div className="mt-2 max-w-[600px]">
          <p
            className="text-white text-lg whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: t("txt-819dedda") }}
          />
        </div>
      </NewHeader>
      {/* <Header /> */}

      <main id="main">
        <section>
          <div className="container">
            <Box
              component="header"
              sx={{ maxWidth: "600px", m: "auto", mb: "2rem" }}
            >
              <Typography
                component="h2"
                variant="h4"
                color="primary.main"
                fontWeight="bold"
                align="center"
                sx={{ mb: "1rem" }}
              >
                Por que apoiar projetos ambientais e sociais?
              </Typography>
              <Typography
                component="h3"
                variant="h6"
                color="grey.A700"
                fontWeight="bold"
                align="center"
                sx={{ mb: "2rem" }}
              >
                Pioneira no mercado de créditos de carbono, buscamos apoiar
                projetos socioambientais certificados por Institutos de Pesquisa
                Brasileiros e empresas reconhecidas internacionalmente.
              </Typography>

              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                Apoie projetos socioambientais certificados por empresas e
                institutos de pesquisa brasileiros reconhecidos.
              </Typography>

              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                Podemos justificar a importância da sua neutralização de carbono
                ou gestão de emissões corporativas referenciando dados das
                Mudanças Climáticas, do Painel Internacional sobre a Mudança
                Climática (IPCC), ou Desigualdades Sociais, da OXFAM, ou
                Prejuízos Econômicos, do Fórum Econômico Mundial, porém
                acreditamos que ninguém é contra ações ambientais e sociais, e o
                que irá fazer as pessoas e empresas agirem são soluções
                transparentes, simples e efetivas.
              </Typography>

              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                Nossa missão começou em 2008, com a primeira plataforma de
                registro de créditos de carbono brasileira, e hoje com a Carbon
                Fair, lançamos a primeira plataforma de negociação de créditos
                de carbono voluntários e socialmente justos utilizada para
                conectar de projetos socioambientais, empresas e pessoas.
              </Typography>

              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                Na Carbon Fair, trabalhamos com projetos passíveis de
                verificação ou já verificados pelos seguintes padrões do mercado
                de carbono: American Carbon Registry (ACR), Climate, Community
                and Biodiversity (CCB), Carbon Fair Standard (CFS),
              </Typography>

              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                Gold Standard (GS), Mecanismo de Desenvolvimento Limpo (MDL),
                Social Carbon (SC) e Verified Carbon Standard (VCS). Todos os
                projetos com o padrão CFS - Carbon Fair Standard são verificados
                por institutos de pesquisa e empresas reconhecidas e têm suas
                soluções baseadas da natureza (Nature Based Solutions) e
                pesquisa (hard science).
              </Typography>

              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                O mecanismo de crédito de carbono não é a única solução, os
                compromissos ambientais devem vir seguidos de mudanças de
                processos, consumo e comprometimento com a sociedade.
              </Typography>

              <Box sx={{ maxWidth: "320px", m: "auto" }}>
                {/* <Image src="" /> */}
              </Box>
            </Box>
          </div>
        </section>

        <Box component="section" sx={{ bgcolor: "#f5f5f5" }}>
          <Box className="container">
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/icons/sustentabilidade.png"
                    alt="icone planeta terra"
                    style={{ maxWidth: 100 }}
                  />
                </Box>
                <Typography
                  component="h2"
                  variant="h4"
                  fontWeight="bold"
                  sx={{ mb: "2rem" }}
                >
                  Empresas e Compradores <br /> de Crédito de Carbono:
                </Typography>

                <Grid container>
                  <Grid item xs={1}>
                    <IoBulbOutline
                      size={30}
                      color={(theme as Theme).palette.primary.main}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1">
                      Maior diversidade de projetos Transparência,
                      rastreabilidade e baixo custo.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={1}>
                    <IoShieldCheckmarkOutline
                      size={30}
                      color={(theme as Theme).palette.primary.main}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1">
                      Credibilidade: parceria com instituições e empresas
                      reconhecidas e benefícios ambientais e sociais
                      comprovados.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={1}>
                    <IoEarthOutline
                      size={30}
                      color={(theme as Theme).palette.primary.main}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1">
                      Alcançar compromissos e metas sociais, ambientais e
                      governança ESG.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/icons/planeta-terra.png"
                    alt="icone planeta terra"
                    style={{ maxWidth: 100 }}
                  />
                </Box>
                <Typography
                  component="h2"
                  variant="h4"
                  fontWeight="bold"
                  sx={{ mb: "2rem" }}
                >
                  Projetos Socioambientais e Vendedores:
                </Typography>

                <Grid container>
                  <Grid item xs={1}>
                    <IoCalendarClearOutline
                      size={30}
                      color={(theme as Theme).palette.primary.main}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1">
                      Mensurar e detalhar os benefícios ambientais e sociais,
                      conforme metodologias reconhecidas e verificação de
                      terceira parte;
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={1}>
                    <TbCoin
                      size={30}
                      color={(theme as Theme).palette.primary.main}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body1">
                      Facilitar o acesso ao mercado de créditos de carbono.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <HowToKnowSection />
      </main>

      {/* <NewLetter /> */}
    </>
  );
};

export default WhyParticipatePage;
