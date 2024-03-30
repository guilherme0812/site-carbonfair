"use client";

import * as React from "react";
import styled from "styled-components";
import { ICBProject, useApiCBProjects } from "../../../../hooks/useApiProjects";
import ProjectSwiper from "../../../patterns/ProjectSwiper";
import { SwiperSlide } from "swiper/react";
import { CheckBox, Input, Label, Select } from "../../../ui";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { ProjectCard } from "../../../patterns";
import { useApiOds } from "../../../../hooks/useApiOds";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const Container = styled.section`
  .filter-container {
    max-height: 180px;
    /* background-color: blue; */
    /* margin: 2rem 0;
        padding: 2rem 0;
        display: flex;
        align-items: center; */
    /* justify-content: space-between; */

    .filter-section-content {
      display: block;
      transition: 500ms;
      opacity: 1;
      width: 100%;
      height: auto;
    }

    .filter-button {
      margin-left: 25px;
      background-color: #83bc51;
      border-radius: 200px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 50;
      cursor: pointer;
      box-shadow: 0px 10px 10px -5px #292929;
    }

    .ods-container {
      width: 100%;
      display: flex;
      gap: 0px;
      flex-wrap: wrap;
      margin-bottom: 2rem;

      .ods-item {
        transition: 300ms;
      }

      .ods-item:hover {
        transform: translate(0, 0.3rem);
      }
    }
    img {
      display: block;
      width: 65px;
    }
  }
  @media (max-width: 768px) {
    .filter-container {
      max-height: 1000px;
      display: flex;
      flex-direction: column;

      .filter-section-content {
        width: 100%;
        height: auto;
      }

      .filter-button.active {
        margin-top: 20px;
      }
    }
  }
`;

const searchAllOption = [{ description: "Todos", key: "" }];

const projectOptions = [
  { description: "Plantio de Floresta", key: "Plantio de Floresta" },
  {
    description: "Preservação Florestal, REDD+",
    key: "Preservação Florestal, REDD+",
  },
  { description: "Energia Renovável", key: "Energia Renovável" },
  { description: "Biomassa Renovável", key: "Biomassa Renovável" },
  {
    description: "Gestão do solo e preservação do carbono",
    key: "Gestão do solo e preservação do carbono",
  },
  {
    description: "Usina Termelétrica à Biomassa",
    key: "Usina Termelétrica à Biomassa",
  },
  { description: "Plantio", key: "Plantio" },
  { description: "Plantio de Mudas", key: "Plantio de Mudas" },
  { description: "Seedling Planting", key: "Seedling Planting" },
  { description: "Plantio", key: "Plantio" },
];

const biomeOptions = [
  { description: "Mata Atlântica", key: "Mata Atlântica" },
  { description: "Amazônia", key: "Amazônia" },
  { description: "Cerrado", key: "Cerrado" },
  { description: "Caatinga", key: "Caatinga" },
  {
    description: "Mata Atlântica e Cerrado",
    key: "Mata Atlântica e Cerrado",
  },
  { description: "Atlantic Rain Forest", key: "Atlantic Rain Forest" },
];

const localOptions = [
  {
    description: "Breves, Ilha do Marajó - PA",
    key: "Breves, Ilha do Marajó - PA",
  },
  {
    description:
      "Rio Itajaí-Açu, entre os municípios de Apiúna, Ibirama e Lontras - SC, Brasil",
    key: "Rio Itajaí-Açu, entre os municípios de Apiúna, Ibirama e Lontras - SC, Brasil",
  },
  {
    description: "Paraído do Tocantins - TO, Brasil",
    key: "Paraído do Tocantins - TO, Brasil",
  },
  { description: "Capela - AL, Brasil", key: "Capela - AL, Brasil" },
  { description: "Extrema - MG", key: "Extrema - MG" },
  { description: "Moju - Pará (PA)", key: "Moju - Pará (PA)" },
  { description: "Brasópolis - MG", key: "Brasópolis - MG" },
  { description: "Jaguariúna - SP", key: "Jaguariúna - SP" },
  {
    description: "Colniza - Mato Grosso (MT)",
    key: "Colniza - Mato Grosso (MT)",
  },
  {
    description: "Rio Guarita / Erval Seco-RS, Brasil",
    key: "Rio Guarita / Erval Seco-RS, Brasil",
  },
  { description: "Jaguariúna - SP", key: "Jaguariúna - SP" },
  { description: "Gravataí/RS", key: "Gravataí/RS" },
  {
    description: "Foz do Jordão - Paraná,  Brasil",
    key: "Foz do Jordão - Paraná,  Brasil",
  },
  {
    description: "Carmo do Rio Claro - MG",
    key: "Carmo do Rio Claro - MG",
  },
  {
    description: "Laranjal do Jari e Vitória do Jari – Amapá (AP),",
    key: "Laranjal do Jari e Vitória do Jari – Amapá (AP),",
  },
  {
    description: "Almeirim – Pará (PA)",
    key: "Almeirim – Pará (PA)",
  },
  { description: "Sousas - SP", key: "Sousas - SP" },
  { description: "São Paulo", key: "São Paulo" },
  { description: "Campinas-Sp", key: "Campinas-Sp" },
  {
    description: "Cristalândia, Tocantins",
    key: "Cristalândia, Tocantins",
  },
  {
    description: "São Sebastião do Uatumã - AM",
    key: "São Sebastião do Uatumã - AM",
  },
  {
    description:
      "Instalada no Rio Uruguai, entre os municípios de Águas de Chapecó, em Santa Catarina, e Alpestre",
    key: "Instalada no Rio Uruguai, entre os municípios de Águas de Chapecó, em Santa Catarina, e Alpestre",
  },
];

const notFoundProject = (
  <Box sx={{ py: "2rem" }}>
    <Typography align="center" variant="h4" fontWeight="bold" color="primary">
      Não encontramos nenhum projeto
    </Typography>
    <Typography align="center" variant="subtitle1">
      Não foi possível encontrar o(s) projetos(s) com os parâmetros acima.
    </Typography>
  </Box>
);

const SearchProjectSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  const { projects } = useApiCBProjects();
  const { ods } = useApiOds();

  const [filteredProjects, setFilteredProjects] = React.useState<ICBProject[]>(
    []
  );

  const [name, setName] = React.useState("");
  const [projectType, setProjectType] = React.useState("");
  const [biome, setBiome] = React.useState("");
  const [local, setLocal] = React.useState("");
  const [odsNumCodigoOptions, setOdsNumCodigoOptions] = React.useState<
    number[]
  >([]);

  const [selectedOds, setSelectedOds] = React.useState<number[]>([]);
  // key to make cicle of component ( update ods selected )
  const [key, setKey] = React.useState(0);

  projectOptions.sort((a, b) =>
    a.description < b.description ? -1 : a.description > b.description ? 1 : 0
  );
  biomeOptions.sort((a, b) =>
    a.description < b.description ? -1 : a.description > b.description ? 1 : 0
  );
  localOptions.sort((a, b) =>
    a.description < b.description ? -1 : a.description > b.description ? 1 : 0
  );

  const removeODS = (value: number | string) => {
    const index = selectedOds.indexOf(value as number);
    const list = selectedOds;
    if (index >= 0) {
      list.splice(index, 1);
      setSelectedOds(list);
    } else {
      list.push(value as number);
      setSelectedOds(list);
    }
    setKey(key + 1);
  };

  const markAll = () => {
    setSelectedOds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
    setKey(key + 1);
  };

  React.useEffect(() => {
    const filteredPerName = projects.filter((opt) => {
      return opt.des_projeto.toLowerCase().includes(name);
    });
    const filteredPerProjectType = filteredPerName.filter((opt) => {
      return opt.des_tipo_projeto
        .toLowerCase()
        .includes(projectType.toLowerCase());
    });
    const filteredPerBiome = filteredPerProjectType.filter((opt) => {
      return opt.des_bioma.toLowerCase().includes(biome.toLowerCase());
    });
    const filteredPerLocal = filteredPerBiome.filter((opt) => {
      return opt.des_cidade.toLowerCase().includes(local.toLowerCase());
    });

    const filteredPerODS = filteredPerLocal.filter((opt) => {
      return opt.ods.some((ods) => selectedOds.includes(ods.id_ods));
    });

    setFilteredProjects(filteredPerODS);
  }, [name, projectType, biome, local, selectedOds, key, projects]);

  React.useEffect(() => {
    if (ods) {
      const numCodigoList: number[] = ods.map((o) => o.num_codigo);

      setOdsNumCodigoOptions(numCodigoList);
      setSelectedOds(numCodigoList);
    }
  }, [ods]);

  return (
    <Container>
      <Box className="container">
        <Box className="filter-container" sx={{ mb: "2rem" }}>
          <div className="filter-section-content">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Label>{t("lbl-df72d891")}</Label>
                <Input
                  placeholder={t("txt-af2bb997")}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <div>
                  <Label>{t("lbl-d0a3d003")}</Label>
                  <Select
                    options={[...searchAllOption, ...projectOptions]}
                    label="description"
                    name="status"
                    optionValue="key"
                    placeholder={t("fld-07c2892e")}
                    onChange={(e) => setProjectType(e.target.value)}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={3}>
                <Label>{t("lbl-7a0f9613")}</Label>
                <Select
                  options={[...searchAllOption, ...biomeOptions]}
                  label="description"
                  name="status"
                  optionValue="key"
                  placeholder={t("fld-07fb1e0b")}
                  onChange={(e) => setBiome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Label>{t("lbl-69988e83")}</Label>
                <Select
                  options={[...searchAllOption, ...localOptions]}
                  label="description"
                  name="status"
                  optionValue="key"
                  placeholder={t("fld-5eeb9fec")}
                  onChange={(e) => setLocal(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <div className="ods-container">
                  {ods &&
                    ods?.map((item, index) => (
                      <div className="ods-item" key={index}>
                        <CheckBox
                          value={item.num_codigo}
                          onClick={(value) => removeODS(value)}
                          key={index}
                          selected={selectedOds.some(
                            (i) => i == item.num_codigo
                          )}
                        >
                          <img
                            src={item.des_url_imagem}
                            alt={String(item.num_codigo)}
                          />
                        </CheckBox>
                      </div>
                    ))}
                </div>

                {selectedOds.length < odsNumCodigoOptions.length && (
                  <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Marcar todos"
                    labelPlacement="end"
                    onClick={markAll}
                  />
                )}
              </Grid>
            </Grid>
          </div>
        </Box>

        {filteredProjects.length > 0 ? (
          <ProjectSwiper>
            {filteredProjects.slice(0, 10).map((item, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...item} shadow />
              </SwiperSlide>
            ))}
          </ProjectSwiper>
        ) : (
          notFoundProject
        )}

        {filteredProjects.length > 10 && (
          <ProjectSwiper>
            {filteredProjects.slice(10, 20).map((item, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...item} shadow />
              </SwiperSlide>
            ))}
          </ProjectSwiper>
        )}

        {filteredProjects.length > 20 && (
          <ProjectSwiper>
            {filteredProjects.slice(20, projects.length).map((item, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...item} shadow />
              </SwiperSlide>
            ))}
          </ProjectSwiper>
        )}
      </Box>
    </Container>
  );
};

export default SearchProjectSection;
