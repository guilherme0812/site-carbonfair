import { Box, Grid } from "@mui/material";
import Container from "./Container";
import Row from "./Row";
import { redirect } from "next/navigation";
import { CarbonRecord } from "@/hooks/useApiCarbonRecord";
import moment from "moment";
import { Header } from "@/components/patterns";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";
import { LangType } from "@/services/getPages";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
  lang: LangType;
  texts: I18nTexts;
};

const getRecord = async (recordId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CARBON_FAIR_API_URL}/carbonfair-publico/registro_carbono_aposentado?id_registro=${recordId}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const OffsetCarbonCreditPage = async ({
  lang,
  params,
  searchParams,
  texts,
}: Props) => {
  const recordId = searchParams.id_registro;
  const { t } = useI18n(texts);
  if (!recordId) {
    redirect("/404");
  }
  const data = await getRecord(recordId as any);
  const record: CarbonRecord = data[0];

  return (
    <>
      <Header
        url="/background/apoiar.jpg"
        backgroundStyle={{ backgroundPosition: "center 100%" }}
      >
        <HeaderDefaultContent lang={lang} title={t("lbl-d99fc834")} />
      </Header>

      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <div className="container">
          <Grid container justifyContent="center">
            {/* container list */}
            <Grid item xs={12} md={8} lg={8}>
              {/* Serial */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  {t("lbl-772c8a78")}
                </Box>
                <Box sx={{ width: "59%" }}>{record?.num_serial}</Box>
              </Row>

              {/* Projeto */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  {t("lbl-1934e45a")}
                </Box>
                <Box sx={{ width: "59%" }}>
                  <a
                    href={`/projeto/${record?.des_url_prefix}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                  >
                    {record?.des_projeto}
                  </a>
                </Box>
              </Row>

              {/* Data Inicio */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  {t("lbl-cf5ce035")}
                </Box>
                <Box sx={{ width: "59%" }}>
                  {record?.dta_vintage_inicio &&
                    moment(record?.dta_vintage_inicio, "YYYY/MM/DD").format(
                      "DD/MM/YYYY"
                    )}
                </Box>
              </Row>

              {/* Data Final */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  {t("lbl-aea7a4f3")}
                </Box>
                <Box sx={{ width: "59%" }}>
                  {record?.dta_vintage_final &&
                    moment(record?.dta_vintage_final, "YYYY/MM/DD").format(
                      "DD/MM/YYYY"
                    )}
                </Box>
              </Row>

              {/* Empresaverificadora */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  {t("lbl-74c54fc3")}
                </Box>
                <Box sx={{ width: "59%" }}>
                  {record?.des_empresa_verificadora}
                </Box>
              </Row>

              {/* Beneficiario */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  {t("lbl-43a4a331")}
                </Box>
                <Box sx={{ width: "59%" }}>{record?.des_beneficial}</Box>
              </Row>

              {/* Quantidade de unidades */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  {t("lbl-45244df0")}
                </Box>
                <Box sx={{ width: "59%" }}>{record?.num_credito_carbono}</Box>
              </Row>

              {/* Verificação */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  {t("lbl-03733ecf")}
                </Box>
                <Box sx={{ width: "59%" }}>{record?.des_tipo_verificacao}</Box>
              </Row>

              {/* Texto adicional */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  {t("lbl-60552447")}
                </Box>
                <Box sx={{ width: "59%" }}>{record?.des_texto_adicional}</Box>
              </Row>

              {/* URL EXTRA */}
              {record && record?.des_tipo_verificacao == "VCS" && (
                <Row>
                  <Box
                    sx={{
                      width: "41%",
                      fontWeight: 700,
                    }}
                  >
                    {t("lbl-25c6a360")}
                  </Box>
                  <Box sx={{ width: "59%" }}>
                    <a
                      href={record?.des_url_externa}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      {record?.des_url_externa}
                    </a>
                  </Box>
                </Row>
              )}
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default OffsetCarbonCreditPage;
