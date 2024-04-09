import Header from "@/components/pages/cliente/Header";
import { ResponsiveImage } from "@/components/ui";
import { ICBClient, ICBClientEvent } from "@/hooks/useApiClients";
import { Box, Grid, Typography } from "@mui/material";
import nextDynamic from "next/dynamic";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { IMarker } from "@/components/ui/Map";
import { ICBProject } from "@/hooks/useApiProjects";
import { useI18n } from "@/hooks/useI18n";
import ClientEventFilter from "./ClientEventFilter";
import Image from "next/image";
import MapSection from "./MapSection";

export const dynamic = "force-dynamic";
export const dynamicParams = false;

const getProjects = async () => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/projetos`,
    {
      headers: { Authorization: "abc" },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const ClientPage = async ({
  texts,
  extraLinks,
  lang,
  folder2,
}: {
  texts: I18nTexts;
  extraLinks: I18nTexts;
  lang: LangType;
  folder2: string;
}) => {
  const { t } = useI18n(texts);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/cliente?cliente=${folder2}`,
    {
      headers: { Authorization: "abc" },
      next: { revalidate: 60 },
    }
  );

  const clientReq: ICBClient[] = await res.json();

  if (clientReq.length == 0) {
    return (
      <div className="my-20">
        <div className="text-center">Erro ao encontrar cliente</div>
      </div>
    );
  }

  const findClient = clientReq[0] as unknown as ICBClient;

  const clientEventRes = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/cliente_eventos?id_cliente=${findClient.id}`,
    {
      headers: { Authorization: "abc" },
      next: { revalidate: 60 },
    }
  );

  const client: ICBClientEvent = await clientEventRes.json();

  const projectIds = client.eventos.map((evt) => evt.id_projeto);

  return (
    <div>
      <Header {...client} />

      <Box className="container" sx={{ pb: 0 }}>
        <div className="flex justify-center mb-2">
          <Image
            src={"/icons/produto-natural.png"}
            alt="Indicadores"
            width={70}
            height={70}
            className="block m-auto"
          />
        </div>

        <Typography
          component="h3"
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{ mb: "2rem" }}
        >
          {t("lbl-07470e58")}
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

            <p
              className="text-center"
              dangerouslySetInnerHTML={{ __html: t("txt-d0390add") }}
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
                currency: "BRL",
              }).format(client.num_arvores_plantadas ?? 0)}
            </Typography>
            <p className="text-center">{t("txt-9cb4245f")}</p>
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
            <p className="text-center">{t("txt-4c0712b0")}</p>
          </Grid>
        </Grid>
      </Box>

      <Box className="container">
        <p className="text-base text-gray-600">{client?.txt_descricao}</p>
      </Box>

      <MapSection projectIds={projectIds} lang={lang} extraLinks={extraLinks} />

      <Box className="container" sx={{ pb: 0 }}>
        <Typography
          sx={{ mb: "2rem" }}
          component="h2"
          variant="h4"
          fontWeight="bold"
          textAlign="center"
        >
          {t("lbl-b15ca687")}
        </Typography>

        <p className="text-gray-600 text-base">
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
        </p>
      </Box>

      <Box className="container">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight="bold"
        >
          {t("lbl-0ea9317f")}
        </Typography>
      </Box>

      <ClientEventFilter
        url={`${client.des_identificador}`}
        clientId={client.id}
      />
    </div>
  );
};

// export async function generateMetadata({ params }: Props) {
//   return {
//     title: params.slug,
//     description: `Página do cliente ${params.slug}`,
//   };
// }

export default ClientPage;
