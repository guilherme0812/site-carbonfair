"use client";

import { Box, Grid, Typography } from "@mui/material";
import { Card } from "../../../ui";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const MainCarbonNeutralizationStamps = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <div>
      <Box className="container" sx={{ pb: 0 }}>
        <Box component="header" sx={{ maxWidth: "600px", m: "auto" }}>
          <Typography
            align="center"
            component="p"
            variant="body1"
            color="GrayText "
            sx={{ mb: "2rem" }}
          >
            {t("txt-358daacc")}
          </Typography>
        </Box>

        <Box component="header" sx={{ mb: "2rem" }}>
          <Typography
            component="h2"
            variant="h4"
            color="primary.main"
            align="center"
            fontWeight="bold"
          >
            {t("lbl-4cbbac86")}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Card
              title={t("lbl-b2a0c3f8")}
              description={t("txt-3695154d")}
              link="https://eccaplan.com.br/neutralizacao_carbono/co2-neutro"
              urlImage="/logos/Selo-co2-neutro.jpg"
              imageSize={90}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              title={t("lbl-806cb6b6")}
              description={t("txt-11b336b3")}
              link="https://eccaplan.com.br/neutralizacao_carbono/evento-neutro"
              urlImage="/logos/Selo-evento-neutro.jpg"
              imageSize={90}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              title={t("lbl-6c35d24c")}
              description={t("txt-a8f4ba43")}
              link="https://www.freteneutro.com.br/ "
              urlImage="/logos/Selo-FNeutro.png"
              imageSize={90}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              title={t("lbl-0151178e")}
              description={t("txt-d2ee1139")}
              link="https://eccaplan.com.br/blog/2022/03/07/como-neutralizar-sua-passagem/"
              urlImage="/logos/Selo-passagem-neutra.jpg"
              imageSize={90}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MainCarbonNeutralizationStamps;
