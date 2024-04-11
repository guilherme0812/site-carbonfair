"use client";

import { GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { DataGrid, NewButton } from "../../ui";
import { useApiCarbonRecords } from "../../../hooks/useApiCarbonRecord";
import { Box, Grid, Typography } from "@mui/material";
import { InputCustomized } from "./InputCustomized";
import { CustomButton } from "./CustomButton";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

interface IItem {
  parceiro: string;
  projetos_apoiados: string;
  link_neutralizacao: string;
  data: string;
}

const RecordsSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [page, setPage] = React.useState(0);
  const [filter, setFilter] = React.useState<string>("");

  const { carbonRecords, isLoading } = useApiCarbonRecords({
    PageNum: page,
    busca: filter,
  });

  const [rows, setRows] = React.useState<IItem[]>([]);
  const [pageSize, setPageSize] = React.useState(5);
  const [rowCountState, setRowCountState] = React.useState(
    carbonRecords?.num_results || 0
  );

  const columns: GridColDef[] = [
    { field: "data", headerName: t("lbl-37ca1dc6"), maxWidth: 100 },
    { field: "parceiro", headerName: t("lbl-ac7a7237"), flex: 1 },
    { field: "projetos_apoiados", headerName: t("lbl-efd3ce79"), flex: 1 },
    {
      field: "link_neutralizacao",
      headerName: "Link",
      minWidth: 160,
      renderCell: (param) => (
        <a
          href={param.row.link_neutralizacao}
          target="_blank"
          rel="noreferrer"
          style={{ display: "block", width: "100%" }}
        >
          <NewButton>{t("btn-e2382610")}</NewButton>
        </a>
      ),
    },
  ];

  React.useEffect(() => {
    const newItems = carbonRecords?.items?.map((item, index) => ({
      ...item,
      id: index,
    }));
    if (newItems) {
      setRows(newItems);
    }
    carbonRecords?.num_results && setRowCountState(carbonRecords?.num_results);
  }, [carbonRecords]);

  return (
    <Box component="section" sx={{ bgcolor: "#f5f5f5" }}>
      <div className="container">
        <Box component="header">
          <Typography
            align="center"
            component="h2"
            variant="h4"
            color="primary.main"
            fontWeight="bolder"
            sx={{ m: "2rem" }}
          >
            {t("btn-bdfdabf1")}
          </Typography>
        </Box>

        <Box sx={{ mb: "2rem" }}>
          <Grid container>
            <Grid item xs={12} md={10.1}>
              <InputCustomized
                ref={inputRef}
                placeholder={t("fld-fd8c3b97")}
                // onChange={(e) => setFilter(e.target.value)}
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
                {t("btn-8609ee1b")}
              </CustomButton>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <DataGrid
            columns={columns}
            rows={[...rows]}
            autoHeight
            rowCount={rowCountState as number}
            loading={isLoading}
            rowsPerPageOptions={[20]}
            pagination
            page={page}
            pageSize={pageSize}
            paginationMode="server"
            onPageChange={(newPage: any) => setPage(newPage)}
            onPageSizeChange={(newPageSize: any) => setPageSize(newPageSize)}
          />
        </Box>
      </div>
    </Box>
  );
};
export default RecordsSection;
