"use client";

import { Box, Typography, Grid } from "@mui/material";
import * as React from "react";
import Header from "./Header";
import {
  GrayTitle,
  NewButton,
  ResponsiveImage,
  Step,
  StepItem,
} from "../../ui";
import { NewLetter } from "../../patterns";

const requiments = [
  "efetiva redução de emissões de Gases de Efeito Estufa (GEE) e adicionalidade, quando comparada as exigências locais e prática de mercado",
  "impactos sociais e ambientais representativos, mensuráveis e com potencial de replicação",
  <>
    processo e tecnologia de redução de emissões de CO<sub>2</sub> comprovada e
    com metodologia reconhecida por institutos de pesquisa reconhecidos ou
    plataformas de créditos de carbono internacionais
  </>,
  "impacto econômico positivo no entorno e necessidade dos recursos financeiros da venda dos créditos de carbono para se viabilizarem",
  "benefícios alinhados aos ODS (Objetivos do Desenvolvimento Sustentável)",
  "contrato e compromisso de comercializar e disponibilizar os créditos de carbono e reduções de emissões apenas na Carbon Fair Trade (CFT). O projeto ambiental poderá retirar os seus créditos de carbono disponíveis da CFT, porém com aviso prévio e restrito aos créditos disponíveis. Os créditos já comercializados e/ou compensados (offset) não podem ser mais utilizados. Solicite mais informações sobre políticas para evitar a dupla contagem dos créditos emitidos.",
];

const supportedProjects = [
  "Agricultura e agrofloresta: introdução de práticas de menor emissão em sistemas agrícolas ou florestais, como, por exemplo, a Agricultura Regenerativa, Sistemas Agroflorestais.",
  "Restauro florestal com espécies nativas: reflorestamento de áreas que originalmente foram florestas, porém estavam sendo utilizadas de outra forma. Não são elegíveis projetos de monocultura ou florestas homogêneas.",
  "REDD+: projetos de Redução de Emissões provenientes do Desmatamento e Degradação Florestal, assim como pela conservação, manejo florestal sustentável e o aumento de estoques de carbono nas florestas.",
  "Outros projetos AFOLU: projetos de Agricultura, Floresta e Uso do Solo, que desenvolvam atividades de redução ou remoção de GEE",
];

const energy = [
  "Biomassa renovável: uso de biomassa de origem renovável para geração de energia térmica e/ou elétrica em substituição a fontes energéticas não renováveis.",
  "Energia eólica",
  "Energia solar",
  "Pequena Central Hidrelétrica",
  "Metano para energia",
  "Eficiência Energética",
  "Fogões eficientes: fogões domésticos eficientes e/ou que utilizem fontes renováveis de energia.",
  "Troca de combustível: substituição de combustíveis não renováveis com alta emissão de GEE por fontes energéticas renováveis e/ou não renováveis de menor emissão de GEE",
];

const waste = [
  "Reciclagem e/ou reuso",
  "Compostagem",
  "Tratamento de efluentes orgânicos",
  "Biodigestores",
  "Purificadores de água",
];

const step1 = [
  "O projetos devem atender as exigências detalhadas acima: adicionalidade em redução ou captura de GEE, benefícios sociais, benefícios ambientais, metodologia de cálculo e verificação, necessidade de apoio financeiro e replicabilidade",
  "Enviar documentos que comprovem estas exigências e o alinhamento aos ODS",
  "Breve apresentação do projeto, resultados e fase de desenvolvimento",
  "Tecnologia ou processo utilizado",
  <>
    Tamanho da área destinada ao projeto ou potencial de redução/captura de CO
    <sub>2</sub>
  </>,
  "Envio de Certificações, caso tenha",
];

const step2 = [
  "Seleção de consultoria especializada para realizar a avaliação detalhada dos documentos e metodologias de validação",
  "Análise de custos para estudo de viabilidade técnica e financeira para obtenção e comercialização dos créditos de carbono (custos para adaptação, certificação e verificação VS potencial de receita com as vendas dos créditos de carbono)",
  "Levantamento dos resultados e emissão de Certificação",
  "Registro do projeto na plataforma Carbon Fair Trade, com status de projeto em análise",
];

const step3 = [
  "Seleção de instituto de pesquisa ou empresa especializada de Verificação da tecnologia aplicada",
  "Análise de todos os documentos do projeto, metodologia e relatórios emitidos pela certificadora",
  "Emissão de Certificado de Verificação",
];

const step4 = [
  "Disposição dos créditos de carbono voluntários certificados na plataforma Carbon Fair Trade",
  "Créditos de carbono disponibilizados nas contas indicadas pelos donos dos projeto",
];

const ProjectRegister = () => {
  const typographyProps = {
    component: "p",
    variant: "body1",
    // color: "GrayText",
  };

  const backgroundImageProps = {
    width: "512px",
    height: "341px",
    borderRadius: "8px",
    bgcolor: "#bdbdbd",
    backgroundSize: "cover",
  };

  return (
    <>
      <Header />

      <Box
        component="main"
        id="main"
        sx={(theme) => ({ bgcolor: theme.palette.grey[100] })}
      >
        <section>
          <div className="container">
            <Box component="header">
              <Typography
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                O principal objetivo da Carbon Fair Trade é incentivar projetos
                com soluções baseadas na natureza (Nature Based Solutions), que
                tenham benefícios sociais e ambientais mensuráveis.
              </Typography>
              <Typography
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                Todos os projetos registrados na Carbon Fair Trade, que possuem
                créditos de carbono voluntários, devem seguir as exigências do
                padrão CFS - Carbon Fair Standard e passarem por processo
                certificados e verificados por empresas e institutos de
                pesquisas reconhecidos nacionalmente e internacionalmente. Veja
                mais em Quem Somos.
              </Typography>
            </Box>
          </div>
        </section>

        <Box component="section" sx={{ pt: 0 }} className="container">
          <Box
            component="header"
            sx={{ borderBottom: "1px solid #bdbdbd", mb: 2 }}
          >
            <GrayTitle style={{ paddingBottom: 0 }}>
              Os projetos registrados devem ter:
            </GrayTitle>
          </Box>

          <ul>
            {requiments.map((item, index) => (
              <Typography
                key={index}
                {...(typographyProps as any)}
                component="li"
              >
                {item}
              </Typography>
            ))}
          </ul>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 8,
              mb: 8,
            }}
          >
            <ResponsiveImage
              alt="image"
              src="/images/2.jpg"
              width={1024 / 1.5}
              height={682 / 1.5}
              style={{ borderRadius: "8px" }}
            />
          </Box>

          <Box
            component="header"
            sx={{
              borderBottom: "1px solid #bdbdbd",
              mt: 4,
              mb: 4,
            }}
          >
            <GrayTitle style={{ paddingBottom: 0 }}>
              Quais tipos de projetos apoiamos?
            </GrayTitle>
          </Box>

          <Grid
            container
            columnSpacing={4}
            rowSpacing={{ xs: 8, md: 4 }}
            sx={{ mb: 8 }}
          >
            <Grid item xs={12} md={6.5}>
              <Typography variant="h6" fontWeight="bold">
                Agricultura, Floresta e Uso do Solo:
              </Typography>

              <ul>
                {supportedProjects.map((item, index) => (
                  <Typography
                    key={index}
                    {...(typographyProps as any)}
                    component="li"
                  >
                    {item}
                  </Typography>
                ))}
              </ul>
            </Grid>

            <Grid
              item
              xs={12}
              md={5.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  ...backgroundImageProps,
                  backgroundImage: "url('/images/floresta.jpg')",
                }}
              ></Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={5.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  ...backgroundImageProps,
                  backgroundImage: "url('/images/floresta-santa-maria.jpg')",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} md={6.5}>
              <Typography variant="h6" fontWeight="bold">
                Energia:
              </Typography>

              <ul>
                {energy.map((item, index) => (
                  <Typography
                    key={index}
                    {...(typographyProps as any)}
                    component="li"
                  >
                    {item}
                  </Typography>
                ))}
              </ul>
            </Grid>

            <Grid item xs={12} md={6.5}>
              <Typography variant="h6" fontWeight="bold">
                Resíduos:
              </Typography>

              <ul>
                {waste.map((item, index) => (
                  <Typography
                    key={index}
                    {...(typographyProps as any)}
                    component="li"
                  >
                    {item}
                  </Typography>
                ))}
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
              md={5.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  ...backgroundImageProps,
                  backgroundImage: "url('/images/residuos.jpg')",
                }}
              ></Box>
            </Grid>
          </Grid>

          <Box
            component="header"
            sx={{ borderBottom: "1px solid #bdbdbd", mb: 2 }}
          >
            <GrayTitle style={{ paddingBottom: 0 }}>
              Etapas de submissão e aprovação dos projetos:
            </GrayTitle>
          </Box>

          <Grid container>
            <Grid item xs={12}>
              <Step>
                <StepItem
                  count={1}
                  title={
                    <Typography fontWeight="bold" variant="h5">
                      Etapa 1: Avaliação preliminar <br /> de elegibilidade
                    </Typography>
                  }
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "50%" }}>
                      <ul>
                        {step1.map((item, index) => (
                          <Typography
                            key={index}
                            {...(typographyProps as any)}
                            component="li"
                          >
                            {item}
                          </Typography>
                        ))}
                      </ul>
                    </Box>

                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ResponsiveImage
                        src="/icons/verificacao.png"
                        alt="verificação"
                      />
                    </Box>
                  </Box>
                </StepItem>
                <StepItem
                  count={2}
                  title={
                    <Typography fontWeight="bold" variant="h5">
                      Etapa 2: Avaliação e certificação
                    </Typography>
                  }
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "50%" }}>
                      <ul>
                        {step2.map((item, index) => (
                          <Typography
                            key={index}
                            {...(typographyProps as any)}
                            component="li"
                          >
                            {item}
                          </Typography>
                        ))}
                      </ul>
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ResponsiveImage
                        src="/icons/certificate.png"
                        alt="verificação"
                      />
                    </Box>
                  </Box>
                </StepItem>

                <StepItem
                  count={3}
                  title={
                    <Typography fontWeight="bold" variant="h5">
                      Etapa 3: Verificação
                    </Typography>
                  }
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "50%" }}>
                      <ul>
                        {step3.map((item, index) => (
                          <Typography
                            key={index}
                            {...(typographyProps as any)}
                            component="li"
                          >
                            {item}
                          </Typography>
                        ))}
                      </ul>
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ResponsiveImage
                        src="/icons/checked.png"
                        alt="verificação"
                      />
                    </Box>
                  </Box>
                </StepItem>

                <StepItem
                  count={4}
                  title={
                    <Typography fontWeight="bold" variant="h5">
                      Etapa 4: Comercialização
                    </Typography>
                  }
                >
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "50%" }}>
                      <ul>
                        {step4.map((item, index) => (
                          <Typography
                            key={index}
                            {...(typographyProps as any)}
                            component="li"
                          >
                            {item}
                          </Typography>
                        ))}
                      </ul>
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ResponsiveImage
                        src="/icons/online-shopping.png"
                        alt="verificação"
                      />
                    </Box>
                  </Box>
                </StepItem>
              </Step>
            </Grid>
          </Grid>
        </Box>

        <br />

        <Box component="section" sx={{ bgcolor: "#303333" }}>
          <Box
            sx={{
              py: 0,
              minHeight: 239,
              display: "flex",
              alignItems: "center",
            }}
            className="container"
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                component="h2"
                variant="h4"
                color="white"
                align="center"
                fontWeight="bold"
                sx={{ mb: "2rem" }}
              >
                Integrar o sistema e engajar os steakholders
              </Typography>

              <Box sx={{ width: "239px", m: "auto" }}>
                <NewButton>CLIQUE AQUI!</NewButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <NewLetter /> */}
    </>
  );
};
export default ProjectRegister;
