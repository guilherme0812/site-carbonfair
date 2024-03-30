import { Box } from '@mui/material'
import PaymentForm from './PaymentForm'
import BackStep from '@/components/patterns/Cart/BackStep'

export type PaymentFormContentType = {
  handleBack(): void
  nameIsValid: boolean
  emailIsValid: boolean
  showEmailField: boolean
}

function PaymentFormContent({
  handleBack,
  emailIsValid,
  nameIsValid,
  showEmailField,
}: PaymentFormContentType) {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <BackStep handleBack={handleBack} />

      <PaymentForm {...{ emailIsValid, nameIsValid, showEmailField }} />
    </Box>
  )
}

export default PaymentFormContent
