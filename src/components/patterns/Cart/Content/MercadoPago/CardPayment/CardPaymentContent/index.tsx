import dynamic from 'next/dynamic'
import BackStep from '../../../../BackStep'

const Component = dynamic(() => import('../CardPaymentForm'), {
  ssr: false,
})
export type CardPaymentContentType = {
  handleBack(): void
  total: number
}

function CardPaymentContent({ handleBack, total }: CardPaymentContentType) {
  return (
    <div>
      <BackStep handleBack={handleBack} />

      <Component total={total} />
    </div>
  )
}

export default CardPaymentContent
