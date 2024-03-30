import { Box, IconButton, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

function BackStep({ handleBack }: { handleBack(): void }) {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <IconButton onClick={handleBack}>
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      <Typography>Voltar</Typography>
    </Box>
  )
}

export default BackStep
