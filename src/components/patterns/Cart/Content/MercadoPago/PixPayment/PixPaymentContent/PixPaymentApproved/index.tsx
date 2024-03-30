import { Avatar, Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check'
import { green } from '@mui/material/colors'

function PixPaymentApproved({ total }: { total: number }) {
  return (
    <Box
      sx={(theme) => ({
        pt: 8,
        bgcolor: green[600],
        boxShadow: theme.shadows[2],
        borderRadius: 1,
        overflow: 'hidden',
      })}
    >
      <Box
        sx={(theme) => ({
          p: 2,
          flexGrow: 1,
          bgcolor: theme.palette.background.paper,
        })}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            transform: 'translateY(-40px)',
            mb: -2,
          }}
        >
          <Avatar
            sx={(theme) => ({
              border: `2px solid ${theme.palette.background.paper}`,
              bgcolor: green[600],
              width: 50,
              height: 50,
            })}
          >
            <CheckIcon />
          </Avatar>
        </Box>

        <Typography
          textAlign="center"
          fontWeight="bold"
          variant="body1"
          sx={{ mt: 0 }}
        >
          Seu pagamento foi aprovado
        </Typography>

        <Box
          component={Paper}
          variant="outlined"
          sx={{ mt: 2, p: 2, display: 'flex', gap: 2, alignItems: 'center' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/qrcode.png"
              width={30}
              height={30}
              alt="qrcode"
            />
          </Box>
          <Box>
            <Typography sx={{}}>
              {new Intl.NumberFormat('pt-BR', {
                currency: 'BRL',
                style: 'currency',
              }).format(total)}
            </Typography>
            <Typography variant="body2">
              Pagamento com PIX feito com sucesso
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PixPaymentApproved
