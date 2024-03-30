import AboutPlanCard from "@/components/pages/assinatura-para-parceiros/AboutPlanCard";
import BeneficialItem from "@/components/pages/assinatura-para-parceiros/BeneficialItem/indx";
import Header from "@/components/pages/assinatura-para-parceiros/Header";
import PlansSection from "@/components/pages/assinatura-para-parceiros/PlanSection";
import { GrayTitle, ResponsiveImage } from "@/components/ui";
import { Box, Grid, Typography } from "@mui/material";

const SubscriptionForPartnersPage = () => {
  return (
    <>
      <Header />

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
            <GrayTitle>
              A Importância de Compensar <br /> Créditos de Carbono
            </GrayTitle>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography
              component="h2"
              variant="h4"
              fontWeight="bold"
              align="center"
              sx={{ mb: 2 }}
            >
              Crédito na Calculadora
            </Typography>

            <Typography
              component="p"
              variant="subtitle1"
              align="center"
              sx={{ mb: 2 }}
            >
              Seus créditos podem ser disponibilizados na nossa Calculadora de
              Emissão de CO<sub>2</sub>, além de realizar o cálculo da pegada de
              carbono é utilizada como uma forma de compensar as emissões,
              através da compra de créditos de carbono ou apoio a projetos de
              redução de emissões. Assim, as pessoas podem neutralizar seu
              impacto ambiental investindo em iniciativas que combatem as
              mudanças climáticas e promovem a sustentabilidade, comprando
              créditos expostos ou fazendo assinaturas mensais para compensar
              todos os meses suas emissões.
            </Typography>

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
              variant="h4"
              fontWeight="bold"
              align="center"
              sx={{ mb: 2 }}
            >
              Crédito no Marketplace Carbon Fair
            </Typography>

            <Typography
              component="p"
              align="center"
              sx={{ mb: 2 }}
              variant="subtitle1"
            >
              Além disso, oferecemos a possibilidade de disponibilizar seus
              créditos de carbono no Marketplace do Carbon Fair. Nessa
              plataforma, todas as pessoas interessadas em aprender mais sobre
              Emissão de CO2, Crédito de Carbono, Sustentabilidade e outros
              temas relacionados que oferecemos têm a oportunidade de participar
              ativamente na redução da pegada de carbono.
            </Typography>

            <Typography
              component="p"
              align="center"
              sx={{ mb: 2 }}
              variant="subtitle1"
            >
              No Marketplace, os créditos de carbono podem ser listados e
              disponibilizados para compra ou troca. Dessa forma, indivíduos,
              empresas e organizações podem acessar a plataforma, conhecer os
              projetos de redução de emissões que geraram esses créditos e
              adquiri-los como uma forma de compensação de suas próprias
              emissões de carbono.
            </Typography>

            <Typography
              component="p"
              align="center"
              sx={{ mb: 2 }}
              variant="subtitle1"
            >
              Nosso objetivo é que todos os créditos de carbono sejam utilizados
              como um recurso valioso, impulsionando iniciativas sustentáveis e
              contribuindo para a mitigação dos impactos ambientais. Além disso,
              ao disponibilizar os créditos no Marketplace do Carbon Fair, você
              estará compartilhando sua contribuição para a sustentabilidade com
              uma comunidade engajada e interessada em promover ações concretas
              para enfrentar os desafios das mudanças climáticas.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              variant="h4"
              fontWeight="bold"
              align="center"
              sx={{ mb: 2 }}
            >
              Sobre a plataforma
            </Typography>

            <Box>
              <Typography component="p" align="center" sx={{ mb: 2 }}>
                Oferecemos dados gerenciais de forma prática e acessível,
                permitindo que você visualize facilmente a movimentação dos seus
                créditos de carbono. Através da nossa plataforma, você terá
                acesso a informações detalhadas sobre vendas, compras,
                transferências, compensações e outras atividades relacionadas
                aos seus créditos de carbono.
              </Typography>

              <Typography component="p" align="center" sx={{ mb: 2 }}>
                Esses dados gerenciais são apresentados de maneira clara,
                proporcionando uma visão abrangente de todas as transações
                realizadas. Você poderá acompanhar o fluxo dos seus créditos,
                identificar tendências, analisar o desempenho das suas ações de
                compensação e tomar decisões informadas para maximizar o impacto
                positivo das suas atividades relacionadas à redução de emissões
                de carbono.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <AboutPlanCard
                title="Créditos Disponíveis"
                amount={1000}
                src="/icons/renovacao.png"
              />
              <AboutPlanCard
                title="Créditos Alocados"
                amount={5392}
                src="/icons/terra-ecologica.png"
              />
              <AboutPlanCard
                title="Créditos Aposentados"
                amount={718}
                src="/icons/planeta-terra-2.png"
              />
              <AboutPlanCard
                title="Créditos Exportados / Cancelados"
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
          }}
        >
          <ResponsiveImage
            src="/images/1.jpg"
            width={1024 / 3}
            height={682 / 3}
            alt="Plantação sustentável"
          />
          <ResponsiveImage
            src="/images/2.jpg"
            width={1024 / 3}
            height={682 / 3}
            alt="Plantação sustentável"
          />
          <ResponsiveImage
            src="/images/3.jpg"
            width={1024 / 3}
            height={682 / 3}
            alt="Plantação sustentável"
          />
        </Box>
      </div>

      <PlansSection />

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
            Cadastre-se para saber mais sobre a plataforma Carbon Fair e atuar
            com estratégias ESG e crédito de carbono
          </Typography>

          <Typography component="h3" align="left">
            Ao se cadastrar na plataforma Carbon Fair, você terá acesso a uma
            série de benefícios para ampliar seus conhecimentos sobre
            estratégias ESG (Environmental, Social and Governance) e Crédito de
            Carbono. Alguns dos benefícios incluem:
          </Typography>

          <Grid container columnSpacing={1} rowSpacing={4} sx={{ mt: "2rem" }}>
            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title="Gestão de indicadores e compromissos"
                description="A plataforma oferece recursos para gerenciar e monitorar indicadores de sustentabilidade e ESG, facilitando a criação de relatórios e a prestação de contas. Isso ajuda a demonstrar seu compromisso com a sustentabilidade de forma transparente e confiável."
              />
            </Grid>

            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title="Ação efetiva contra as mudanças climáticas"
                description="Através da Carbon Fair, você pode apoiar projetos sociais e ambientais que contribuem diretamente para a mitigação das mudanças climáticas. Essa ação efetiva permite que você faça a diferença na preservação do planeta"
              />
            </Grid>

            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title="Redução de custos com ferramentas de gestão de emissões de CO2"
                description={
                  <>
                    A plataforma Carbon Fair disponibiliza ferramentas de gestão
                    de emissões de CO
                    <sub>2</sub>, permitindo que você identifique áreas de
                    redução de emissões e implemente estratégias para minimizar
                    os impactos ambientais. Isso pode resultar em economias
                    significativas nos custos operacionais da sua empresa.
                  </>
                }
              />
            </Grid>

            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title="Uso de selos de neutralização de carbono"
                description="Ao cumprir as condições estabelecidas, você terá a possibilidade de utilizar selos de neutralização de carbono, que comprovam sua compensação de emissões e seu compromisso com a neutralidade climática. Esses selos podem ser utilizados para fortalecer a reputação da sua empresa e atrair clientes e parceiros comprometidos com a sustentabilidade."
              />
            </Grid>

            <Grid item xs={12} md={3} lg={4}>
              <BeneficialItem
                title="Fomento ao desenvolvimento de novos projetos ambientais"
                description={
                  <>
                    <Typography>
                      Seu apoio financeiro auxilia na viabilização e
                      implementação de iniciativas que visam à redução de
                      emissões e à preservação do meio ambiente.
                    </Typography>
                    <Typography>
                      Esses benefícios oferecidos pela plataforma Carbon Fair
                      permitem que você integre a sustentabilidade em sua
                      estratégia empresarial, agregando valor à sua marca,
                      reduzindo custos e promovendo ações concretas em prol do
                      meio ambiente.
                    </Typography>
                  </>
                }
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default SubscriptionForPartnersPage;
