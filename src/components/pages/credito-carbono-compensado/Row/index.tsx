"use client"

import { Box } from "@mui/material"
import { styled, Theme } from "@mui/material/styles"

const Row = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: "flex",
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
}))

export default Row
