import { Box, Grid } from "@mui/material";
import Container from "./Container";
import Row from "./Row";
import { redirect } from "next/navigation";
import { CarbonRecord } from "@/hooks/useApiCarbonRecord";
import moment from "moment";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
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

const Page = async (props: Props) => {
  const recordId = props.searchParams.id_registro;

  if (!recordId) {
    redirect("/404");
  }
  const data = await getRecord(recordId as any);
  const record: CarbonRecord = data[0];

  return (
    <>
      <Container>
        <div className="white-linear-gradient">
          <div className="container p-0">
            <Grid container>
              <Grid item xs={12} md={5} sx={{ px: "2rem" }}>
                <Box className="content">
                  <Box>
                    <h1>Crédito de Carbono Compensado</h1>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>

      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <div className="container">
          <Grid container justifyContent="center">
            {/* container list */}
            <Grid item xs={12} md={8} lg={8}>
              {/* Serial */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>Serial</Box>
                <Box sx={{ width: "59%" }}>{record?.num_serial}</Box>
              </Row>

              {/* Projeto */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>Projeto</Box>
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
                <Box sx={{ width: "41%", fontWeight: 700 }}>Data de ínicio</Box>
                <Box sx={{ width: "59%" }}>
                  {record?.dta_vintage_inicio &&
                    moment(record?.dta_vintage_inicio, "YYYY/MM/DD").format(
                      "DD/MM/YYYY"
                    )}
                </Box>
              </Row>

              {/* Data Final */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>Data final</Box>
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
                  Empresa verificadora
                </Box>
                <Box sx={{ width: "59%" }}>
                  {record?.des_empresa_verificadora}
                </Box>
              </Row>

              {/* Beneficiario */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>Beneficiário</Box>
                <Box sx={{ width: "59%" }}>{record?.des_beneficial}</Box>
              </Row>

              {/* Quantidade de unidades */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  Quantidade de unidades
                </Box>
                <Box sx={{ width: "59%" }}>{record?.num_credito_carbono}</Box>
              </Row>

              {/* Verificação */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>Padrão</Box>
                <Box sx={{ width: "59%" }}>{record?.des_tipo_verificacao}</Box>
              </Row>

              {/* Texto adicional */}
              <Row>
                <Box sx={{ width: "41%", fontWeight: 700 }}>
                  Texto adicional
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
                    URL Externa do Registro
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

export default Page;
