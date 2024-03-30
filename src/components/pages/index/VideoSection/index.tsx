"use client";

import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useI18n } from "@/hooks/useI18n";
import { I18nTexts } from "@/types";

const VideoSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);
  return (
    <Box
      className="container"
      sx={(theme) => ({ bgcolor: theme.palette.background.default })}
    >
      <Grid
        container
        columnSpacing={16}
        rowSpacing={8}
        alignItems="center"
        // sx={{ mb: 8 }}
      >
        <Grid item xs={12} md={6}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Ct-yKzzgzKY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component="h2" variant="h5" sx={{ fontWeight: "bold" }}>
            {t("txt-4ba3e217")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default VideoSection;
