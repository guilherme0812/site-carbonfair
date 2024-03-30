import * as React from "react"
import { Typography } from "@mui/material"

type AuxType = {
    children: React.ReactNode
}

const ErrorMessage = ({ children }: AuxType) => {
    return (
        <Typography variant="body2" sx={{ color: "error.main", mt: -2 }}>
            {" "}
            {children} &nbsp;{" "}
        </Typography>
    )
}
export default ErrorMessage
