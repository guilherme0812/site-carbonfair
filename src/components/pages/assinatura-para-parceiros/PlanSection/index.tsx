"use client";

import * as React from "react";
import { Box, Tooltip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
import { Button, GrayTitle } from "@/components/ui";
import CustomDataGrid from "../../../ui/DataGrid";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const CellCustomized = styled.div`
  max-width: 300px;
  word-break: break-all;
  white-space: normal;
  font-weight: bold;
  color: ${(props) => props.theme.palette.grey[700]};
`;

const PlansSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  const columns: GridColDef[] = [
    {
      field: "beneficial",
      headerName: t("lbl-51d60922"),
      flex: 1,
      minWidth: 300,
      renderCell: (param) => {
        const row = param.row.semente;

        if (row == "amount") {
          return <strong style={{ fontSize: "1rem" }}>Valor</strong>;
        }

        return (
          <CellCustomized
            dangerouslySetInnerHTML={{ __html: param.row.beneficial }}
          />
        );
      },
    },
    {
      field: "semente",
      headerName: t("lbl-766cd610"),
      headerAlign: "center",
      flex: 1,
      minWidth: 150,
      align: "center",
      renderCell: (param) => {
        const row = param.row.semente;

        if (row == "amount") {
          return (
            <strong style={{ fontSize: "1rem" }}>
              R$ 149,00
              <span style={{ fontSize: "0.7rem" }}>/mês</span>
            </strong>
          );
        }

        if (row == "button") {
          return (
            <a
              href="/assinatura-para-parceiros/dados-cadastrais?plan=semente"
              style={{ display: "block", width: "100%" }}
            >
              <Button variant="contained" fullWidth>
                {t("btn-1cebb152")}
              </Button>
            </a>
          );
        }

        if (row === true || row === false) {
          if (row) {
            return <IoCheckmarkOutline fontSize="1.5rem" color="#008c0c" />;
          } else {
            return <IoCloseOutline fontSize="1.5rem" color="#8c0000" />;
          }
        }

        return row;
      },
    },
    {
      field: "germinacao",
      headerName: t("lbl-e6f8879f"),
      headerAlign: "center",
      flex: 1,
      minWidth: 150,
      align: "center",
      renderCell: (param) => {
        const row = param.row.germinacao;

        if (row == "amount") {
          return (
            <strong style={{ fontSize: "1rem" }}>
              R$ 389,00
              <span style={{ fontSize: "0.7rem" }}>/mês</span>
            </strong>
          );
        }

        if (row == "button") {
          return (
            <a
              href="/assinatura-para-parceiros/dados-cadastrais?plan=germinacao"
              style={{ display: "block", width: "100%" }}
            >
              <Button variant="contained" fullWidth>
                {t("btn-428cba2c")}
              </Button>
            </a>
          );
        }

        if (row === true || row === false) {
          if (row) {
            return <IoCheckmarkOutline fontSize="1.5rem" color="#008c0c" />;
          } else {
            return <IoCloseOutline fontSize="1.5rem" color="#8c0000" />;
          }
        }
      },
    },
    {
      field: "crescimento",
      headerAlign: "center",
      headerName: t("lbl-7bebc672"),
      flex: 1,
      align: "center",
      minWidth: 150,
      renderCell: (param) => {
        const row = param.row.crescimento;

        if (row == "amount") {
          return (
            <strong style={{ fontSize: "1rem" }}>
              R$ 569,00
              <span style={{ fontSize: "0.7rem" }}>/mês</span>
            </strong>
          );
        }

        if (row == "button") {
          return (
            <a
              href="/assinatura-para-parceiros/dados-cadastrais?plan=crescimento"
              style={{ display: "block", width: "100%" }}
            >
              <Button variant="contained" fullWidth>
                {t("btn-7ae3d377")}
              </Button>
            </a>
          );
        }

        if (row === true || row === false) {
          if (row) {
            return <IoCheckmarkOutline fontSize="1.5rem" color="#008c0c" />;
          } else {
            return <IoCloseOutline fontSize="1.5rem" color="#8c0000" />;
          }
        }
      },
    },
    {
      field: "polinizacao",
      headerName: t("lbl-fcdcbdff"),
      headerAlign: "center",
      flex: 1,
      minWidth: 150,
      align: "center",
      renderCell: (param) => {
        const row = param.row.polinizacao;

        if (row == "whatsapp-link") {
          return (
            <Tooltip title="Clique para conversar com um consultor">
              <a
                href="https://api.whatsapp.com/send?phone=5511982144404&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20mais%20sobre%20a%20Carbon%20Fair"
                target="_blanc"
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "90%",
                }}
              >
                Falar com um <br /> consultor
              </a>
            </Tooltip>
          );
        }

        if (row == "button") {
          return (
            <a
              href="/assinatura-para-parceiros/dados-cadastrais?plan=polinizacao"
              style={{ display: "block", width: "100%" }}
            >
              <Button variant="contained" fullWidth>
                {t("btn-869e3822")}
              </Button>
            </a>
          );
        }
        if (row === true || row === false) {
          if (row) {
            return <IoCheckmarkOutline fontSize="1.5rem" color="#008c0c" />;
          } else {
            return <IoCloseOutline fontSize="1.5rem" color="#8c0000" />;
          }
        }
      },
    },
  ];

  const data: any[] = [
    {
      id: 1,
      beneficial: t("txt-42830446"),
      semente: "1",
      germinacao: "2",
      crescimento: "5",
      polinizacao: "10+",
    },
    {
      id: 2,
      beneficial: t("txt-63f9fa47"),
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 3,
      beneficial: t("txt-ef90bb36"),
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 4,
      beneficial: t("txt-468165c5"),
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 5,
      beneficial: t("txt-2699bf47"),
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 6,
      beneficial: t("txt-2202e764"),
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 7,
      beneficial: t("txt-c325d140"),
      semente: false,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 8,
      beneficial: t("txt-d866e463"),
      semente: false,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 9,
      beneficial: t("txt-0a87b73b"),
      semente: false,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 10,
      beneficial: t("txt-066a2784"),
      semente: false,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 11,
      beneficial: t("txt-9a2b827b"),
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 12,
      beneficial: t("txt-ef86afb3"),
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 13,
      beneficial: t("txt-94eb5a20"),
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 14,
      beneficial: t("txt-185777d0"),
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 15,
      beneficial: t("txt-c815a57a"),
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 18,
      beneficial: t("txt-a6515ad9"),
      semente: false,
      germinacao: false,
      crescimento: false,
      polinizacao: true,
    },
    {
      id: 19,
      beneficial: t("txt-59492ea3"),
      semente: false,
      germinacao: false,
      crescimento: false,
      polinizacao: true,
    },
    // {
    //   id: 20,
    //   beneficial: "amount",
    //   semente: "amount",
    //   germinacao: "amount",
    //   crescimento: "amount",
    //   polinizacao: "whatsapp-link",
    // },
    {
      id: 21,
      beneficial: "",
      semente: "button",
      germinacao: "button",
      crescimento: "button",
      polinizacao: "button",
    },
  ];

  return (
    <Box className="container" sx={{ pt: 0 }}>
      <Box
        sx={(theme) => ({
          borderBottom: `1px solid ${theme.palette.grey[500]}`,
          mb: "4rem",
        })}
        component="header"
      >
        <GrayTitle>{t("lbl-cf32f009")}</GrayTitle>
      </Box>

      <CustomDataGrid
        rows={[...data]}
        columns={columns}
        autoHeight
        headerHeight={40}
        rowHeight={60}
      />
    </Box>
  );
};

export default PlansSection;
