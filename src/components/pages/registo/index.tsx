"use client";

import { Box, Grid, Typography } from "@mui/material";
import Header from "./Header";
import { InputCustomized } from "@/components/pages/registo/InputCustomized";
import { CustomButton } from "@/components/pages/registo/CustomButton";
import { DataGrid, Button } from "@/components/ui";
import RecordsSection from "@/components/pages/registo/RecordsSection";
import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { useApiPublicCarbonRecords } from "@/hooks/useApiCarbonRecord";

export type ListRegistroPedido = {
  FNEID: number;
  FNENome: string;
  list: {
    FNFID: number;
    FNFDataGerado: string;
    FNFLinkNeutralizacao: string;
  }[];
};

const INITIAL_PAGE_SIZE = 10;

function RegisterPage() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [filter, setFilter] = React.useState<string>("");
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(INITIAL_PAGE_SIZE);

  const handlePageChange = (params: any) => {
    setPage(params.page);
  };

  const options = {
    pagination: true,
    pageSize,
    paginationAutoPageSize: true,
    page: page,
    onPageChange: handlePageChange,
  };

  const columns: GridColDef[] = [
    {
      field: "dta_lancamento",
      headerName: "Data",
      flex: 1,
      maxWidth: 100,
      renderCell: (param) =>
        moment(param.row.dta_lancamento, "YYYY/MM/DD").format("DD/MM/YYYY"),
    },

    { field: "des_beneficial", headerName: "Beneficiário", flex: 1 },
    // {
    //     field: "des_texto_adicional",
    //     headerName: "Texto adicional",
    //     minWidth: 400,
    //     flex: 1,
    //     renderCell: (param) => (
    //         <CellCustomized readOnly>
    //             {param.row.des_texto_adicional}
    //         </CellCustomized>
    //     ),
    // },
    { field: "des_projeto", headerName: "Projeto", flex: 1 },
    {
      field: "l",
      headerName: "Link",
      minWidth: 160,
      renderCell: (param) => (
        <a
          href={`/credito-carbono-compensado?id_registro=${param.row.id}`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            width: "100%",
          }}
        >
          <Button variant="contained">Visualizar</Button>
        </a>
      ),
    },
  ];

  const { data } = useApiPublicCarbonRecords(filter);
  return (
    <div>
      <Header />

      <main id="main">
        <section>
          <div className="container">
            <Box
              component="header"
              sx={{ maxWidth: "600px", m: "auto", mb: "2rem" }}
            >
              <Typography
                align="center"
                component="h2"
                variant="h4"
                color="primary.main"
                fontWeight="bold"
                sx={{ m: "2rem" }}
              >
                Seja bem vindo ao Registro de Neutralização de Carbono
              </Typography>
              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                A primeira plataforma da América Latina para monitoramento e
                transparência das principais iniciativas em neutralização de
                carbono no Brasil.
              </Typography>
              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                O objetivo desse sistema é prover informação transparente aos
                signatários que compensam as suas emissões na plataforma Carbon
                Fair e nos programas CO2 Neutro, Evento Neutro e Frete CO2
                Neutro, garantindo a não-duplicidade e real benefício ambiental
                no uso dos instrumentos de compensação adquiridos nos mercados
                de carbono.
              </Typography>
              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                A disponibilidade ou abertura dos dados no Registro é opcional,
                porém todas as informações ficam registradas internamente.
              </Typography>
              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                A veracidade e não-duplicidade de quaisquer instrumentos de
                compensação utilizados nas empresas e eventos é sua garantia de
                qualidade e credibilidade. Quaisquer irregularidades,
                contacte-nos imediatamente.
              </Typography>
              <Typography
                align="center"
                component="p"
                variant="body1"
                color="GrayText"
                sx={{ m: "1rem" }}
              >
                Caso deseje saber mais sobre o processo de certificação e
                “aposentadoria” de créditos de carbono e programas de
                neutralização de carbono da Eccaplan, entre em contato conosco
                em carbono@eccaplan.com.br.
              </Typography>
            </Box>
          </div>
        </section>

        <Box component="section" sx={{ bgcolor: "#F3F3F3" }}>
          <div className="container">
            <Typography
              align="center"
              component="h2"
              variant="h4"
              color="primary.main"
              fontWeight="bold"
              sx={{ m: "2rem" }}
            >
              Ultimos Registros Compensados
            </Typography>

            <Grid container sx={{ mb: "2rem" }}>
              <Grid item xs={12} md={10.1}>
                <InputCustomized
                  ref={inputRef}
                  placeholder="Digite para pesquisar por beneficiário"
                  onKeyDown={(event) =>
                    event.key === "Enter" &&
                    setFilter(
                      inputRef.current?.value ? inputRef.current?.value : ""
                    )
                  }
                />
              </Grid>
              <Grid item xs={12} md={1.9}>
                <CustomButton
                  onClick={() =>
                    setFilter(
                      inputRef.current?.value ? inputRef.current?.value : ""
                    )
                  }
                >
                  Pesquisar
                </CustomButton>
              </Grid>
            </Grid>

            <DataGrid
              rows={[...data]}
              columns={columns}
              autoHeight
              headerHeight={40}
              rowHeight={60}
              rowsPerPageOptions={[10, 25, 100]}
              onPageSizeChange={setPageSize}
              {...(options as any)}
            />
          </div>
        </Box>

        <RecordsSection />
      </main>
    </div>
  );
}

export default RegisterPage;
