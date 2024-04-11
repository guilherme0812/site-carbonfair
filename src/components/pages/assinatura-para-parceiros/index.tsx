import AboutPlanCard from "@/components/pages/assinatura-para-parceiros/AboutPlanCard";
import BeneficialItem from "@/components/pages/assinatura-para-parceiros/BeneficialItem/indx";
import PlansSection from "@/components/pages/assinatura-para-parceiros/PlanSection";
import { Header } from "@/components/patterns";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";
import { GrayTitle, ResponsiveImage } from "@/components/ui";
import { useI18n } from "@/hooks/useI18n";
import { LangType } from "@/services/getPages";
import { I18nTexts } from "@/types";
import { Box, Grid, Typography } from "@mui/material";

const SubscriptionForPartnersPage = ({
  texts,
  lang,
}: {
  texts: I18nTexts;
  lang: LangType;
}) => {
  const { t } = useI18n(texts);

  return (
    <>
      <Header url="/background/imagem_assinatura.png">
        <HeaderDefaultContent lang={lang} title={t("lbl-0d8d073f")} />
      </Header>

      <Box component="section" id="main">
        <div className="container">
          <Box
            component="header"
            sx={{
              borderBottom: "1px solid #bdbdbd",
              mb: "4rem",
              mt: 4,
            }}
          >
            <GrayTitle>{t("lbl-128f4962")}</GrayTitle>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography
              component="h2"
              variant="h5"
              fontWeight="bold"
              align="center"
              sx={{ mb: 2 }}
            >
              {t("lbl-1c782b72")}
            </Typography>

            <p
              className="text-base text-center text-gray-600 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: t("txt-4a3ccab7") }}
            />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ResponsiveImage
                src="/images/calculator-marketplace-card.jpg"
                width={457 / 1.8}
                height={682 / 1.8}
                alt="images/calculator-marketplace-card.jpg"
              />
            </Box>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography
              component="h2"
              variant="h5"
              fontWeight="bold"
              align="center"
              sx={{ mb: 2 }}
            >
              {t("lbl-c9e16287")}
            </Typography>

            <p
              className="text-base text-center text-gray-600 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: t("txt-54d2eb12") }}
            />

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <ResponsiveImage
                src="/images/cf-marketplace-card.jpg"
                width={287}
                height={556}
                alt="images/cf-marketplace-card.jpg"
              />
            </Box>
          </Box>

          <Box>
            <Typography
              component="h2"
              variant="h5"
              fontWeight="bold"
              align="center"
              sx={{ mb: 2 }}
            >
              {t("lbl-3354c0d0")}
            </Typography>

            <Box>
              <p
                className="text-base text-center text-gray-600 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: t("txt-24543843") }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
              }}
            >
              <AboutPlanCard
                title={t("lbl-a609f4b0")}
                amount={1000}
                src="/icons/renovacao.png"
              />
              <AboutPlanCard
                title={t("lbl-4e063fb4")}
                amount={5392}
                src="/icons/terra-ecologica.png"
              />
              <AboutPlanCard
                title={t("lbl-e425e366")}
                amount={718}
                src="/icons/planeta-terra-2.png"
              />
              <AboutPlanCard
                title={t("lbl-3dc532d7")}
                amount={718}
                src="/icons/sustentabilidade.png"
              />
            </Box>
          </Box>
        </div>
      </Box>

      <div className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            mt: 2,
            mb: 4,
          }}
        >
          <ResponsiveImage
            src="/images/1.jpg"
            width={1024 / 3}
            height={682 / 3}
            alt="Plantação sustentável"
            style={{ borderRadius: 8 }}
          />
          <ResponsiveImage
            src="/images/2.jpg"
            width={1024 / 3}
            height={682 / 3}
            alt="Plantação sustentável"
            style={{ borderRadius: 8 }}
          />
          <ResponsiveImage
            src="/images/3.jpg"
            width={1024 / 3}
            height={682 / 3}
            alt="Plantação sustentável"
            style={{ borderRadius: 8 }}
          />
        </Box>
      </div>

      <PlansSection texts={texts} />

      <Box component="section" sx={{ pt: 0 }}>
        <Grid container>
          <Grid item xs={12} md={8}></Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
        <div className="container">
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              mb: "2rem",
            }}
          >
            <ResponsiveImage
              src="/logos/carbon-fair.png"
              alt="Carbon Fair"
              width={1365 / 4}
              height={324 / 4}
            />
          </Box>

          <Typography
            component="h2"
            variant="h4"
            fontWeight="bold"
            align="left"
            sx={{ mb: 2 }}
          >
            {t("lbl-6e99acee")}
          </Typography>

          <Typography component="h3" align="left">
            {t("txt-23e541bb")}
          </Typography>

          <Grid container columnSpacing={1} rowSpacing={4} sx={{ mt: "2rem" }}>
            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title={t("lbl-52a666f1")}
                description={t("txt-844c5e70")}
              />
            </Grid>

            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title={t("lbl-03fb3f76")}
                description={t("txt-aa7cbbd3")}
              />
            </Grid>

            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title={t("lbl-9bc7aa5a")}
                description={t("txt-6c45af80")}
              />
            </Grid>

            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title={t("lbl-d81aeeac")}
                description={t("txt-5de397b8")}
              />
            </Grid>

            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title={t("lbl-2c9b55f1")}
                description={t("txt-de01a818")}
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default SubscriptionForPartnersPage;
