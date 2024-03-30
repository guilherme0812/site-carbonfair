'use client'

import styled from "styled-components"
import * as React from "react"
import { Box, Grid, Typography, IconButton } from "@mui/material"
import { GoFile } from "react-icons/go"
import { IoDownloadOutline } from "react-icons/io5"
import ChatIcon from "./ChatIcon"
import { ProjectDocument } from "../../../../hooks/useApiProjectDocuments"

export interface RowProps extends ProjectDocument {
    handleOpenChat(): void
}

const Container = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.palette.grey[500]};
    margin-bottom: 10px;
    padding-bottom: 10px;
`

const Row = ({ handleOpenChat, des_url, total_comentarios }: RowProps) => {
    const name = des_url.split("/")

    return (
        <Container>
            <Grid container>
                <Grid item xs={10}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <GoFile />
                        <Typography variant="subtitle1">
                            {name[name.length - 1]}
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={1}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <a href={des_url} target="_blank" rel="noreferrer">
                        <IconButton>
                            <IoDownloadOutline fontSize="1.3rem" />
                        </IconButton>
                    </a>
                </Grid>

                <Grid
                    item
                    xs={1}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <ChatIcon
                        onClick={handleOpenChat}
                        num_comments={total_comentarios}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Row
