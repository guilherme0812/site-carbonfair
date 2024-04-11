"use client";

import { Box, Grid, Typography } from "@mui/material";
// import Header from "./Header";
import { InputCustomized } from "@/components/pages/registo/InputCustomized";
import { CustomButton } from "@/components/pages/registo/CustomButton";
import { DataGrid, Button } from "@/components/ui";
import RecordsSection from "@/components/pages/registo/RecordsSection";
import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { useApiPublicCarbonRecords } from "@/hooks/useApiCarbonRecord";
import { useI18n } from "@/hooks/useI18n";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { Header } from "@/components/patterns";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";

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

function RegisterPage({
  texts,
  lang,
  extraLinks,
}: {
  texts: I18nTexts;
  lang: LangType;
  extraLinks: I18nTexts;
}) {
  const { t } = useI18n(texts);
  const { t: links } = useI18n(extraLinks);

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
      headerName: t("lbl-130c18d0"),
      flex: 1,
      maxWidth: 100,
      renderCell: (param) =>
        moment(param.row.dta_lancamento, "YYYY/MM/DD").format("DD/MM/YYYY"),
    },

    { field: "des_beneficial", headerName: t("lbl-3d500ab5"), flex: 1 },
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
    { field: "des_projeto", headerName: t("lbl-7f4b7590"), flex: 1 },
    {
      field: "l",
      headerName: "Link",
      minWidth: 160,
      renderCell: (param) => (
        <a
          href={`/${lang}/${links("lnk-dbc32486")}?id_registro=${param.row.id}`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            width: "100%",
          }}
        >
          <Button variant="contained">{t("btn-0de17d34")}</Button>
        </a>
      ),
    },
  ];

  const { data } = useApiPublicCarbonRecords(filter);
  return (
    <div>
      <Header
        url="/background/registro.jpg"
        backgroundStyle={{ backgroundPosition: "center 100%" }}
      >
        <HeaderDefaultContent lang={lang} title={t("lbl-d5436a37")} />
      </Header>

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
                {t("lbl-95dc405f")}
              </Typography>
              <p
                className="whitespace-pre-line text-base text-gray-600 text-center"
                dangerouslySetInnerHTML={{ __html: t("txt-a8ffcf50") }}
              />
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
              {t("lbl-768e6701")}
            </Typography>

            <Grid container sx={{ mb: "2rem" }}>
              <Grid item xs={12} md={10.1}>
                <InputCustomized
                  ref={inputRef}
                  placeholder={t("fld-9daf7791")}
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
                  {t("btn-03267c75")}
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

        <RecordsSection texts={texts} />
      </main>
    </div>
  );
}

export default RegisterPage;
