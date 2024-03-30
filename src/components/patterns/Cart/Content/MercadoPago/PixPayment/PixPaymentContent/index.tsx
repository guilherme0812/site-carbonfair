import BackStep from '@/components/patterns/Cart/BackStep'
import { Box } from '@mui/material'
import dynamic from 'next/dynamic'

const PixPayment = dynamic(() => import('./PixPayment'), {
  ssr: false,
})

type ThirdStepType = {
  handleBack(): void
  total: number
}

function PixPaymentContent({ handleBack, total }: ThirdStepType) {
  return (
    <>
      <Box>
        <BackStep handleBack={handleBack} />

        <PixPayment total={total} />
      </Box>
    </>
  )
}

export default PixPaymentContent
