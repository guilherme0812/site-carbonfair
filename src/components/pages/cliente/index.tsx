import Header from "@/components/pages/cliente/Header";
import { ResponsiveImage } from "@/components/ui";
import { ICBClient, ICBClientEvent } from "@/hooks/useApiClients";
import { apiCarbonFair } from "@/services/api";
import { getClients } from "@/services/clients";
import { getProjects } from "@/services/projects";
import { Box, Grid, Typography } from "@mui/material";
import nextDynamic from "next/dynamic";
import ClientEventFilter from "@/components/pages/cliente/ClientEventFilter";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { getTest } from "./getTest";

export const dynamic = "force-dynamic";
export const dynamicParams = false;

// const Map = nextDynamic(() => import("../../../components/ui/Map"), {
//   ssr: false,
// });

const ClientPage = async ({
  texts,
  lang,
  folder2,
}: {
  texts: I18nTexts;
  lang: LangType;
  folder2: string;
}) => {
  const data = getTest() as unknown as string;
  // const request = await apiCarbonFair.get(
  //   `carbonfair-publico/cliente_eventos?identificador_cliente=${params.slug}`
  // );

  // const client: ICBClientEvent = request.data;
  // const projects = await getProjects();

  // const projectIds = client.eventos.map((evt) => evt.id_projeto);
  // const projectsFiltered = projects.filter((project) =>
  //   projectIds.includes(project.id)
  // );

  // const projectsMarkers: IMarker[] = projectsFiltered.map((project) => ({
  //   biome: project.des_bioma,
  //   kg: Number(project.num_kg_co2),
  //   latY: Number(project.des_latitude),
  //   lonX: Number(project.des_longitude),
  //   local: project.des_cidade,
  //   name: project.des_projeto,
  //   projectDefault: project.des_padrao,
  //   type: project.des_tipo_projeto,
  //   link: "/projeto/" + project.des_url_prefix,
  // }));

  return (
    <div>
      <div className="mt-20">
        {folder2} - {data}
      </div>
      {/* <Header {...client} /> */}

      {/* <Box className="container" sx={{ pb: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "2rem",
          }}
        >
          <ResponsiveImage src="/icons/produto-natural.png" alt="Indicadores" />
        </Box>

        <Typography
          component="h3"
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{ mb: "2rem" }}
        >
          Indicadores dessa ação
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              component="h3"
              variant="h4"
              fontWeight="bold"
              align="center"
            >
              {new Intl.NumberFormat("pt-BR", {
                currency: "BRL",
              }).format(Number(client.num_kg_co2) ?? 0)}
            </Typography>
            <Typography variant="subtitle1" align="center">
              kg de CO<sub>2</sub> compensados
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography
              component="h3"
              variant="h4"
              fontWeight="bold"
              align="center"
            >
              {new Intl.NumberFormat("pt-BR", {
                currency: "BRL",
              }).format(client.num_arvores_plantadas ?? 0)}
            </Typography>
            <Typography variant="subtitle1" align="center">
              Número de árvores plantadas
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography
              component="h3"
              variant="h4"
              fontWeight="bold"
              align="center"
            >
              {new Intl.NumberFormat("pt-BR", {
                currency: "BRL",
              }).format(client.num_total_apoiadores ?? 0)}
            </Typography>
            <Typography variant="subtitle1" align="center">
              Número de apoiadores
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="container">
        <Typography component="p">{client?.txt_descricao}</Typography>
      </Box>

      <Map markers={[...projectsMarkers]} />

      <Box className="container" sx={{ pb: 0 }}>
        <Typography
          sx={{ mb: "2rem" }}
          component="h2"
          variant="h4"
          fontWeight="bold"
          textAlign="center"
        >
          O que são as ações
        </Typography>

        <Typography component="p">
          Todo evento e empresa de alguma forma impacta o meio ambiente, seja
          pelo consumo de combustível, energia ou geração de resíduos. As ações
          de redução e compensação de carbono são ações voluntárias e de
          educação e responsabilidade socioambiental frente às mudanças
          climáticas. A compensação ou neutralização de carbono é realizada com
          o apoio a projetos socioambientais certificados e com benefícios
          comprovados e rastreáveis. Todas as iniciativas com os Selos Evento
          Neutro, CO2 Neutro e Frete Neutro, registrados na plataforma Carbon
          Fair e proporcionados pela Eccaplan e seus parceiros, recebem
          certificado e link de verificação e transparência da ação ambiental
          realizada.
        </Typography>
      </Box>

      <Box className="container">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight="bold"
        >
          Todas as ações desse cliente
        </Typography>
      </Box>

      <ClientEventFilter
        url={`${client.des_identificador}`}
        clientId={client.id}
      /> */}
    </div>
  );
};

// export async function generateStaticParams() {
//   try {
//     const allclients = await getClients();
//     const clients = allclients.filter((c) => c.bol_ativo === true);

//     const test = clients.map((client) => ({
//       slug: client.des_identificador,
//     }));

//     return clients.map((client) => ({
//       slug: client.des_identificador,
//     }));
//   } catch (error) {
//     return [];
//   }
// }

// export async function generateMetadata({ params }: Props) {
//   return {
//     title: params.slug,
//     description: `Página do cliente ${params.slug}`,
//   };
// }

export default ClientPage;
