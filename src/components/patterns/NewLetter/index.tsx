"use client";

import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Button, NewInput } from "../../../components/ui";
import { I18nTexts } from "@/types";
import { useI18n } from "@/hooks/useI18n";

const InputCustomized = styled(NewInput)`
  border: 1px solid transparent;
  border: none;
  outline: none;
  border-radius: 8px 0 0 8px;

  &:focus {
    border: none;

    outline: none;
  }

  & {
    height: 40px;
  }
`;

const Container = styled.section`
  background-color: ${(props) => props.theme.palette.primary.dark};
  color: ${(props) => props.theme.palette.info.contrastText};

  .input-container {
    NewInput {
      border: 1px solid transparent;
    }
  }
`;

const NewLetter = ({ texts }: { texts: I18nTexts }) => {
  const { t } = useI18n(texts);

  return (
    <Container>
      <div className="container">
        <Box sx={{ mb: "2rem" }}>
          <Typography component="h2" variant="h6" sx={{ fontWeight: "bold" }}>
            {t("lbl-98f054b9")}
          </Typography>
          <Typography component="p" variant="body1">
            {t("txt-2c30e0b7")}
          </Typography>
        </Box>

        <Box
          className="input-container"
          sx={{ bgcolor: "background.paper", borderRadius: "8px" }}
        >
          <Grid container>
            <Grid item xs={12} md={10}>
              <InputCustomized placeholder={t("fld-ce8e6dd1")} />
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                variant="contained"
                fullWidth
                sx={(theme) => ({
                  height: 40,
                  borderRadius: "0 8px 8px 0",
                  // [theme.breakpoints.down("md")]: {
                  //   height: "48px",
                  // },
                })}
              >
                {t("btn-2c6f184d")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
};

export default NewLetter;
