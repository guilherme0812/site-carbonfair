"use client";

import * as React from "react";
import { Box, Tooltip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import styled from "styled-components";
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
import { Button, GrayTitle } from "@/components/ui";
import CustomDataGrid from "../../../ui/DataGrid";

const CellCustomized = styled.div`
  max-width: 300px;
  word-break: break-all;
  white-space: normal;
  font-weight: bold;
  color: ${(props) => props.theme.palette.grey[700]};
`;

const PlansSection = () => {
  const columns: GridColDef[] = [
    {
      field: "beneficial",
      headerName: "Benefícions",
      flex: 1,
      minWidth: 300,
      renderCell: (param) => {
        const row = param.row.semente;

        if (row == "amount") {
          return <strong style={{ fontSize: "1rem" }}>Valor</strong>;
        }

        return <CellCustomized>{param.row.beneficial}</CellCustomized>;
      },
    },
    {
      field: "semente",
      headerName: "Semente",
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
                Escolher este
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
      headerName: "Germinação",
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
                Escolher este
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
      headerName: "Crescimento",
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
                Escolher este
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
      headerName: "Polinização",
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
                Escolher este
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
      beneficial: "Usuário(s)",
      semente: "1",
      germinacao: "2",
      crescimento: "5",
      polinizacao: "10+",
    },
    {
      id: 2,
      beneficial: "Dashboards de Gerenciamento",
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 3,
      beneficial: "Transferência de Créditos",
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 4,
      beneficial: "Aposentadoria de Créditos",
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 5,
      beneficial: "Comprar Créditos Internamente",
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 6,
      beneficial: "Vender Créditos Internamente",
      semente: true,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 7,
      beneficial: "Upload de Créditos Padrão CFS (Carbon Fair Standard)",
      semente: false,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 8,
      beneficial: "Upload de Créditos Padrão VCS/CDM/ONU",
      semente: false,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 9,
      beneficial: "Anúncio dos Créditos na Calculadora",
      semente: false,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 10,
      beneficial: "Anúncio dos Créditos no Marketplace Externo",
      semente: false,
      germinacao: true,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 11,
      beneficial: "Anúncio dos Créditos no Frete Neutro",
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 12,
      beneficial: "Anúncio dos Créditos no Passagem Neutra",
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 13,
      beneficial: "Trader de Crédito de Carbono",
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 14,
      beneficial: "Histórico de Emissões/Compensações de CO2",
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 15,
      beneficial: "Ferramenta de Cálculo de Emissoes Corporativas",
      semente: false,
      germinacao: false,
      crescimento: true,
      polinizacao: true,
    },
    {
      id: 18,
      beneficial: "Cadastro de Filiais",
      semente: false,
      germinacao: false,
      crescimento: false,
      polinizacao: true,
    },
    {
      id: 19,
      beneficial:
        "Desenvolvimento de Projetos na Cadeia Produtiva e Projetos Apoiados",
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
        <GrayTitle>
          Oferecemos planos especiais para empresas que desejam promover ações
          sustentáveis em sua organização e contribuir para a preservação do
          planeta.
        </GrayTitle>
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
