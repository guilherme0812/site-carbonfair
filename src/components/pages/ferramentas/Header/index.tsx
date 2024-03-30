import { Grid, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import * as React from "react"
import styled from "styled-components"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Container = styled.header`
    background-image: url("/background/projetos-apoiados.jpg");
    background-position: center;
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
        /* margin-bottom: 2rem; */
        font-weight: ${(props) => props.theme.shadows[24]};
    }
    p {
        font-size: 1.3rem;
    }
`

const Header = () => {
    return (
        <>
            <Container>
                <div className="white-linear-gradient">
                    <div className="container p-0">
                        <Grid container>
                            <Grid item xs={12} md={5} sx={{ px: "2rem" }}>
                                <Box className="content">
                                    <Box></Box>

                                    <Box>
                                        <h1>
                                            Calculadora e Ferramentas de
                                            Integração
                                        </h1>
                                    </Box>

                                    <Box>
                                        <a href="/ferramentas#main">
                                            <IconButton
                                                size="large"
                                                sx={{
                                                    marginTop: "-2rem",
                                                    fontSize: "3rem",
                                                }}
                                            >
                                                <ExpandMoreIcon
                                                    sx={{
                                                        fontSize: "4rem",
                                                        color: "#fff",
                                                    }}
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
