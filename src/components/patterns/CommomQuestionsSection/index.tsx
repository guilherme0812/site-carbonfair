"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useI18n } from "@/hooks/useI18n";
import { I18nTexts } from "@/types";

const Container = styled.section`
  background-color: ${(props: any) => props.theme.palette.grey[100]};
`;

const accordionStyle = {
  bgcolor: "#f5f5f5",
  py: 3,
  boxShadow: "none",
  border: "none",
};

const CommomQuestionsSection = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <div className="container">
        <Box
          component="header"
          sx={{
            borderBottom: "1px solid #bdbdbd",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: "bold", mb: "2rem" }}
            align="center"
          >
            {t("lbl-6bbf0052")}
          </Typography>
        </Box>

        <Grid container>
          {/* 1 */}
          <Grid item xs={12} md={6} sx={{ borderBottom: "1px solid #bdbdbd" }}>
            <Accordion sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {t("lbl-d7c5ace7")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" className="whitespace-pre-line">
                  {t("txt-7019e6b2")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* 2 */}
          <Grid item xs={12} md={6} sx={{ borderBottom: "1px solid #bdbdbd" }}>
            <Accordion sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {t("lbl-1e702ab7")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  className="whitespace-pre-line text-sm list-disc"
                  dangerouslySetInnerHTML={{ __html: t("txt-41004ad4") }}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* 3 */}
          <Grid item xs={12} md={6} sx={{ borderBottom: "1px solid #bdbdbd" }}>
            <Accordion sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {t("lbl-31a4ce49")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ mb: "2rem" }}
                  variant="body2"
                  className="whitespace-pre-line"
                >
                  {t("txt-3591af63")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* 4 */}
          <Grid item xs={12} md={6} sx={{ borderBottom: "1px solid #bdbdbd" }}>
            <Accordion sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" fontWeight="bold">
                  <h3
                    className="text-base font-bold"
                    dangerouslySetInnerHTML={{ __html: t("lbl-1b3efd70") }}
                  />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" className="whitespace-pre-line">
                  {t("txt-05c59b66")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* 05 */}
          <Grid item xs={12} md={6} sx={{ borderBottom: "1px solid #bdbdbd" }}>
            <Accordion sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {t("lbl-f63eea38")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  className="whitespace-pre-line text-sm list-disc"
                  dangerouslySetInnerHTML={{ __html: t("txt-ee44343b") }}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* 06 */}
          <Grid item xs={12} md={6} sx={{ borderBottom: "1px solid #bdbdbd" }}>
            <Accordion sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {t("lbl-9b8cdf9f")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ mb: "2rem" }}
                  variant="body2"
                  className="whitespace-pre-line"
                >
                  {t("txt-fd40fba8")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* 07 */}
          <Grid item xs={12} md={6} sx={{ borderBottom: "1px solid #bdbdbd" }}>
            <Accordion sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3
                  className="text-base font-bold"
                  dangerouslySetInnerHTML={{ __html: t("lbl-4950105a") }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <div
                  className="whitespace-pre-line text-sm list-disc"
                  dangerouslySetInnerHTML={{ __html: t("txt-bd9044a0") }}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* 08 */}
          <Grid item xs={12} md={6} sx={{ borderBottom: "1px solid #bdbdbd" }}>
            <Accordion sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3
                  className="text-base font-bold"
                  dangerouslySetInnerHTML={{ __html: t("lbl-7c65e342") }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <div
                  className="whitespace-pre-line text-sm list-disc"
                  dangerouslySetInnerHTML={{ __html: t("txt-8b195657") }}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* 09 */}
          <Grid item xs={12} md={6} sx={{ borderBottom: "1px solid #bdbdbd" }}>
            <Accordion sx={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3
                  className="text-base font-bold"
                  dangerouslySetInnerHTML={{ __html: t("lbl-667ab668") }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ mb: "2rem" }}
                  variant="body2"
                  className="whitespace-pre-line"
                >
                  {t("txt-8e7bf1dc")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default CommomQuestionsSection;
