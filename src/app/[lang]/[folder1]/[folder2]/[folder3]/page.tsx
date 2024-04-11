import ClientEventFilter from "@/components/pages/cliente/ClientEventFilter";
import Header from "@/components/pages/cliente/evento/Header";
import { Navbar } from "@/components/patterns";
import Gallery, { GalleryImage } from "@/components/patterns/Gallery";
import { IMarker } from "@/components/ui/Map";
import { ICBClient, ICBClientEvent } from "@/hooks/useApiClients";
import { ICBProject } from "@/hooks/useApiProjects";
import { useI18n } from "@/hooks/useI18n";
import { getFolders } from "@/services/folders";
import { LangType, getPages } from "@/services/getPages";
import { getLanguages } from "@/services/language";
import { I18nTexts } from "@/types";
import { Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";

export const dynamicParams = false;

const NAVBAR = "header";

export async function generateStaticParams() {
  const req = await getFolders();
  const filterList = ["header", "footer", "links_extras"];
  const filteredPages = req.filter((item) => !filterList.includes(item.id));

  return filteredPages.map((page) => ({
    lang: page.lang,
    folder1: page.folder_1,
    folder2: page.folder_2,
    folder3: page.folder_3,
  }));
}

export async function generateMetadata({ params }: any) {
  return {
    title: params.folder_3,
    description: `Página de ${params.folder_2}`,
  };
}

const Map = dynamic(() => import("../../../../../components/ui/Map"), {
  ssr: false,
});

export default async function Page({
  params,
}: {
  params: { lang: LangType; folder1: string; folder2: string; folder3: string };
}) {
  const { lang, folder2 } = params;

  //pages
  const pagesData = await getPages(folder2, ["evento"]);
  const data = pagesData.find((p) => p.lang == lang);
  const { t } = useI18n(data?.text as unknown as I18nTexts);

  //navbar requests
  const navbarPages = await getPages(NAVBAR);
  const navbarText = navbarPages.find((page) => page.lang == lang)
    ?.text as unknown as I18nTexts;

  // links extras
  const extraLinksPages = await getPages("links_extras");
  const extraLinks = extraLinksPages.find((i) => i.lang == params.lang)?.text;

  const { t: links } = useI18n(extraLinks as unknown as I18nTexts);
  const languages = await getLanguages();

  if (!data) {
    return <div>Erro ao encontrar dado da página</div>;
  }

  // event page
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/cliente_eventos?evento=${params.folder3}`,
    {
      headers: { Authorization: "abc" },
      next: { revalidate: 60 },
    }
  );

  const client: ICBClientEvent = await res.json();

  if (!client) {
    return <div className="my-20 text-center">Cliente não encontrado</div>;
  }

  const event = client.eventos[0];

  if (!event) {
    return <div className="my-20 text-center">Nenhum evento encontrado</div>;
  }

  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/projeto?id_projeto=${event?.id_projeto}`,
    {
      headers: { Authorization: "abc" },
      next: { revalidate: 60 },
    }
  );

  const projects: ICBProject[] = await projectRes.json();
  const project = projects[0];
  if (!project) {
    return (
      <div className="my-20 text-center">Projeto do evento não encontrado</div>
    );
  }

  const marker: IMarker = {
    biome: project.des_bioma,
    kg: Number(project.num_kg_co2),
    latY: Number(project.des_latitude),
    lonX: Number(project.des_longitude),
    local: project.des_cidade,
    name: project.des_projeto,
    projectDefault: project.des_padrao,
    type: project.des_tipo_projeto,
    link: `/${lang}/${links("lnk-5e8299f8")}/${project.des_url_prefix}`,
  };

  const imageList: GalleryImage[] = project.documentos.map((doc) => ({
    id: doc.id,
    bol_ativo: true,
    des_url: doc.des_url,
    num_ordem: doc.num_ordem,
  }));

  return (
    <div>
      <Navbar
        lang={lang as any}
        pages={pagesData}
        languages={languages}
        texts={navbarText}
      />

      <Header {...event} />

      <Box className="container">
        <Typography style={{ whiteSpace: "pre-wrap" }}>
          {event?.txt_descricao_simples}
        </Typography>
      </Box>

      <Box className="container">
        <Typography
          component="h3"
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{ mb: "4rem" }}
        >
          {t("lbl-a339442a")}
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mb: "2rem" }}>
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              component="h3"
              variant="h4"
              fontWeight="bold"
              align="center"
            >
              {new Intl.NumberFormat("pt-BR", {
                // style: "currency",
                currency: "BRL",
              }).format(Number(event.num_kg_co2))}
            </Typography>
            <p
              className="text-base text-center"
              dangerouslySetInnerHTML={{ __html: t("txt-25de8fc4") }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography
              component="h3"
              variant="h4"
              fontWeight="bold"
              align="center"
            >
              {new Intl.NumberFormat("pt-BR", {
                // style: "currency",
                currency: "BRL",
              }).format(Number(event.num_arvores_plantadas))}
            </Typography>
            <Typography variant="subtitle1" align="center">
              {t("txt-cbb53874")}
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
                // style: "currency",
                currency: "BRL",
              }).format(Number(event.num_total_apoiadores))}
            </Typography>
            <Typography variant="subtitle1" align="center">
              {t("txt-c0903f3")}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="container">
        <Typography
          variant="h6"
          fontWeight="bold"
          align="center"
          component="h4"
          sx={{ mb: "4rem" }}
        >
          {project.des_projeto}
        </Typography>

        <Grid container sx={{ mb: "2rem" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={2.4}>
              <Typography
                variant="h6"
                fontWeight="bold"
                align="center"
                component="h4"
              >
                {t("lbl-bef51d54")}
              </Typography>
              <Typography textAlign="center">
                {project?.des_status_projeto}
              </Typography>
            </Grid>

            <Grid item xs={12} md={2.4}>
              <Typography
                variant="h6"
                fontWeight="bold"
                align="center"
                component="h4"
              >
                {t("lbl-12c7603e")}
              </Typography>

              <Typography
                variant="h6"
                fontWeight="bold"
                align="center"
                component="h4"
              >
                {project?.des_tipo_projeto}
              </Typography>
            </Grid>
            <Grid item xs={12} md={2.4}>
              <Typography
                variant="h6"
                fontWeight="bold"
                align="center"
                component="h4"
              >
                {t("lbl-8aa80573")}
              </Typography>

              <Typography textAlign="center">{project?.des_bioma}</Typography>
            </Grid>
            <Grid item xs={12} md={2.4}>
              <Typography
                variant="h6"
                fontWeight="bold"
                align="center"
                component="h4"
              >
                {t("lbl-0c3e4cc5")}
              </Typography>

              <Typography textAlign="center">{project?.des_cidade}</Typography>
            </Grid>
            <Grid item xs={12} md={2.4}>
              <Typography
                variant="h6"
                fontWeight="bold"
                align="center"
                component="h4"
              >
                {t("lbl-e417947f")}
              </Typography>

              <Typography textAlign="center">{project?.des_padrao}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <div className="selos">
          <Grid
            container
            columnSpacing={8}
            rowSpacing={4}
            justifyContent="center"
          >
            {project?.ods.map((ods, index) => (
              <Grid item xs={4} md={1.5} key={index}>
                <img
                  key={index}
                  src={ods.des_url_imagem}
                  alt={ods.des_ods}
                  width={"100%"}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>

      <Box sx={{ pt: 0 }} className="container">
        <Gallery imageList={imageList} />
      </Box>

      <Map markers={[marker]} />

      <Box className="container">
        <Typography style={{ whiteSpace: "pre-wrap" }} sx={{ mt: "2rem" }}>
          {project.txt_descricao_detalhada}
        </Typography>
      </Box>

      <Box className="container">
        <img
          src={event.des_banner}
          alt={event.des_banner}
          style={{
            maxWidth: 300,
            display: "block",
            margin: "auto",
            marginBottom: "2rem",
          }}
        />

        <Typography
          component="h2"
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{ mb: "2rem" }}
        >
          {event.des_nome}
        </Typography>

        <Typography style={{ whiteSpace: "pre-wrap" }}>
          {event?.txt_descricao_detalhada}
        </Typography>

        <Box sx={{ mt: "2rem", mb: "4rem" }}>
          <Gallery imageList={event.imagens} />
        </Box>

        {client?.eventos && client?.eventos?.length > 1 && (
          <>
            <Typography
              component="h2"
              variant="h4"
              fontWeight="bold"
              align="center"
            >
              Mais ações apoiadas pela empresa
            </Typography>

            <ClientEventFilter
              url={`${client.des_identificador}`}
              clientId={client.id}
            />
          </>
        )}
      </Box>
    </div>
  );
}
