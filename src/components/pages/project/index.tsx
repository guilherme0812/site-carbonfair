// import { Gallery } from "@/components/patterns";
import { ICBProject } from "@/hooks/useApiProjects";
import { LangType } from "@/services/getPages";
import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import { IMarker } from "../../../components/ui/Map";
import { GalleryImage } from "@/components/patterns/Gallery";
import Header from "./Header";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";
import ProjectData from "./ProjectData";
import ProjectDetails from "./ProjectDetails";
import ProjectDocuments from "./ProjectDocuments";
import GallerySection from "./GallerySection";
import GalleryCarbonFair from "@/components/patterns/GalleryCarbonFair";
import { SecondaryTabsCarbonFair } from "@/components/patterns";
import TabsChoose from "./TabsChoose";

const labelStyle = {
  variant: "caption",
};

const titleStyle = {
  // align: "center",
  fontWeight: "bold",
  variant: "subtitle2",
};

const Map = dynamic(() => import("../../../components/ui/Map"), {
  ssr: false,
});

const ProjectPage = async ({
  texts,
  lang,
  folder2,
}: {
  texts: I18nTexts;
  lang: LangType;
  folder2: string;
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/projeto?projeto=${folder2}`,
    {
      headers: { Authorization: "abc" },
      // cache: "no-store",
      next: { revalidate: 60 },
    }
  );

  const projectsReq: ICBProject[] = await res.json();

  const project = projectsReq[0] as unknown as ICBProject;

  const { t } = useI18n(texts);

  let marker: IMarker | null = null;
  let imageList: GalleryImage[] = [];

  if (project) {
    marker = {
      biome: project.des_bioma,
      kg: `${new Intl.NumberFormat("pt-BR").format(
        project.num_kg_co2 ? Number(project.num_kg_co2) : 0
      )}}CO2eq`,
      latY: Number(project.des_latitude),
      lonX: Number(project.des_longitude),
      local: project.des_cidade,
      name: project.des_projeto,
      projectDefault: project.des_padrao,
      type: project.des_tipo_projeto,
    };

    imageList = project.documentos.map((doc) => ({
      id: doc.id,
      bol_ativo: true,
      des_url: doc.des_url,
      num_ordem: doc.num_ordem,
    }));
  } else {
    return <div>Erro ao renderizar cliente</div>;
  }

  return (
    <div>
      <div
        className="max-w-screen-2xl m-auto mt-20 sm:px-4 lg:px-0 max-h-screen"
        id="sumario"
      >
        <TabsChoose />

        <div className="flex gap-8">
          <div className="w-1/2 ">
            <GalleryCarbonFair
              options={[
                "https://carbonfair-publico.s3.amazonaws.com/projetos/1/capa_400.jpg",
                ...imageList.map((list) => list.des_url),
              ]}
              // imagesInLayout={7}
            />
          </div>

          <div className="w-1/2 max-h-[80vh] overflow-y-scroll overflow-x-hidden">
            <h2 className="mb-2 font-bold text-xl">{project.des_projeto}</h2>

            <p className="text-base text-gray-600 mt-16 mb-8">
              {project?.txt_descricao_simples}
            </p>

            <Grid container className="mb-8">
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Typography
                    className="text-green-800"
                    {...(titleStyle as any)}
                  >
                    {t("lbl-1ade420b")}
                  </Typography>
                  <Typography {...(labelStyle as any)}>
                    {project?.des_status_projeto}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography
                    className="text-green-800"
                    {...(titleStyle as any)}
                  >
                    {t("lbl-5c0b678a")}
                  </Typography>
                  <Typography {...(labelStyle as any)}>
                    {project?.des_tipo_projeto}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography
                    className="text-green-800"
                    {...(titleStyle as any)}
                  >
                    {t("lbl-5e07586f")}
                  </Typography>
                  <Typography {...(labelStyle as any)}>
                    {project?.des_bioma}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography
                    className="text-green-800"
                    {...(titleStyle as any)}
                  >
                    {t("lbl-4d3c2b81")}
                  </Typography>
                  <Typography {...(labelStyle as any)}>
                    {project?.des_cidade}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography
                    className="text-green-800"
                    {...(titleStyle as any)}
                  >
                    {t("lbl-ba9a21c8")}
                  </Typography>
                  <Typography {...(labelStyle as any)}>
                    {project?.des_padrao}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <h3
                    className="text-sm whitespace-pre-line font-bold text-green-800"
                    dangerouslySetInnerHTML={{ __html: t("lbl-e1c99165") }}
                  />
                  <Typography {...(labelStyle as any)}>
                    {new Intl.NumberFormat("pt-BR").format(
                      project?.num_kg_co2 ? Number(project.num_kg_co2) : 0
                    )}{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {project?.des_youtube_id && (
              <div className="mb-16">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${project?.des_youtube_id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Box>
              </div>
            )}

            <Divider sx={{ mb: "1rem" }} />

            {/* {imageList.length > 0 && (
              <GallerySection options={imageList.map((list) => list.des_url)} />
            )} */}

            <ProjectData project={project} texts={texts} />

            <Divider sx={{ mb: "1rem" }} />

            <h2 className="mb-2 font-bold text-xl" id="detalhes">
              Detalhes
            </h2>

            <ProjectDetails {...project} />

            <ProjectDocuments {...project} />

            <Divider sx={{ mb: "1rem" }} />

            {marker && (
              <div>
                <h2 className="mb-2 font-bold text-xl" id="localizacao">
                  Localização
                </h2>
                <Map
                  markers={[marker]}
                  zoom={5}
                  x={marker.lonX}
                  y={marker.latY}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <Header {...project} /> */}
    </div>
  );
};

export default ProjectPage;
