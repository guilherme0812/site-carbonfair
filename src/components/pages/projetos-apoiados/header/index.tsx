import { Grid, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import * as React from "react"
import styled from "styled-components"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Container = styled.header`
    background-image: url("/background/projetos-apoiados.jpg");
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    /* color: ${(props) => props.theme.palette.info.contrastText}; */

    .content {
        min-height: 100vh;
        display: grid;
        align-content: space-between;
    }
    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    p {
        font-size: 1.3rem;
    }
`

const Header = () => {
    return (
        <>
            <Container>
                <div className="white-linear-gradient-2">
                    <div className="container p-0">
                        <Grid container>
                            <Grid item xs={12} md={5} sx={{ px: "2rem" }}>
                                <Box className="content">
                                    <Box></Box>

                                    <Box>
                                        <h1>
                                            Projetos <br /> apoiados
                                        </h1>
                                        <p>
                                            Acompanhamento de metas de emissões
                                            de CO<sub>2</sub> e redução de custo
                                            com compra e uso de créditos de
                                            carbono.
                                        </p>
                                    </Box>

                                    <Box>
                                        <a href="/projetos-apoiados#main">
                                            <IconButton
                                                size="large"
                                                sx={{
                                                    // transform: "translateY(-2em)",
                                                    marginTop: "-2rem",
                                                    fontSize: "3rem",
                                                }}
                                            >
                                                <ExpandMoreIcon
                                                    sx={{ fontSize: "4rem" }}
                                                />
                                            </IconButton>
                                        </a>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Header
