import { Box, Grid, Typography } from "@mui/material"
import styled from "styled-components"

const Container = styled.div`
    background-image: url("/background/how-to-know.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const HowToKnowSection = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            bgcolor: "#ffffff8f",
                            p: "6rem",
                            display: "grid",
                            minHeight: "80vh",
                        }}
                        className="container"
                    >
                        <Typography
                            component="h2"
                            variant="h3"
                            fontWeight="bold"
                            sx={{ mb: "2rem" }}
                        >
                            Como posso saber se os projetos estão realmente
                            fazendo a diferença?
                        </Typography>

                        <Typography sx={{ mb: "2rem" }}>
                            A plataforma Carbon Fair Trade garante que as suas
                            compensações fazem a diferença de várias maneiras.
                            Antes de adicionar um projeto à plataforma, ele
                            passa por um processo criterioso de análise por
                            nossa equipe, consultoria especializada externa e um
                            centro de pesquisa ou outra empresa especializada. O
                            projeto precisa atender todos os critérios de
                            adicionalidade e benefícios ambientais, sociais e
                            econômicos.
                        </Typography>
                        <Typography>
                            Adicionalidade refere-se a reduções de emissões
                            efetivas, que não ocorreriam sem o incentivo
                            financeiro do crédito de carbono ou não são práticas
                            usuais de mercado. Finalmente, toda a compra e
                            neutralização de carbono ficam registrados de forma
                            transparente, rastreável e auditável, com a
                            tecnologia blockchain, dando-lhe certeza que a sua
                            compra foi efetiva e beneficiou o projeto
                            socioambiental.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default HowToKnowSection
