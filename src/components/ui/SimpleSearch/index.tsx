"use client";

import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import { NewButton, NewInput } from "../";
import { removeAccents } from "../../../utils";
import { useEffect } from "react";
import { useI18n } from "@/hooks/useI18n";
import { I18nTexts } from "@/types";

export interface OptionProps {
  type: string;
  title: string;
  link: string;
}

interface SimpleSearchProps {
  options: OptionProps[];
  texts: I18nTexts;
}

const Container = styled.section`
  .overlay.active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .input-container {
    position: relative;

    NewInput {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
    }

    .options-container {
      position: absolute;
      top: 40px;
      left: 0;
      width: 100%;
      margin-top: 15px;
      background-color: ${(props) => props.theme.palette.background.paper};
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      /* padding: 0.5rem; */
      list-style: none;
      padding: 0;
      max-height: 220px;
      overflow-y: auto;
      box-shadow: 0px 13px 15px -6px rgba(0, 0, 0, 0.3);
      z-index: 10;
    }

    .option {
      padding: 10px 25px;
      transition: 300ms;
      display: flex;
      align-items: center;

      span {
        font-size: 0.7rem;
      }
    }

    .option:hover {
      background-color: #f5f5f5;
      border-radius: 0.5rem;
    }
  }
`;

const SimpleSearch = ({ options, texts }: SimpleSearchProps) => {
  const [rows, setRows] = React.useState<OptionProps[]>([]);
  const [filter, setFilter] = React.useState<string>("");
  const [active, setActive] = React.useState("");
  const { t } = useI18n(texts);
  const handleClickOutSide = () => {
    setActive("");
    setRows([]);
  };

  const handleSearch = () => {
    const filterLowerCase = filter?.toLowerCase();
    const newRow = options.filter((opt) => {
      const projectName = removeAccents(opt.title);
      return projectName.toLowerCase().includes(removeAccents(filterLowerCase));
    });
    if (filter.length > 0) {
      setActive("active");
    }
    setRows(newRow);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (filter.length >= 3) {
      handleSearch();
    }
  }, [filter]);

  return (
    <Container>
      {texts && (
        <div className="container">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h2"
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                {texts && t("btn-0fcac2b7")}
              </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                  <div className="input-container">
                    <NewInput
                      placeholder={t("btn-0fcac2b7")}
                      onChange={(e) => setFilter(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <div
                      className={`overlay ${active}`}
                      onClick={handleClickOutSide}
                    ></div>

                    <ul className="options-container">
                      {filter.length > 0 &&
                        rows.map((opt, index) => (
                          <Link href={opt.link} key={index}>
                            <li
                              className="option"
                              key={index}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <span>{opt.type} </span>
                              &nbsp;- {opt.title}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </Grid>
                <Grid item xs={12} md={2}>
                  <NewButton onClick={handleSearch}>
                    {t("btn-0fcac2b7")}
                  </NewButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default SimpleSearch;
