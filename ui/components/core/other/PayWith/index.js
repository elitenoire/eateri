import { memo } from 'react'
import { Flex } from '@theme-ui/components'
import { Text } from '~@core/typography'
import { ReactComponent as ApplePayIcon } from '~/public/inlineSvg/payicons/applepay.svg'
import { ReactComponent as StripeIcon } from '~/public/inlineSvg/payicons/stripe.svg'
import { ReactComponent as PaystackIcon } from '~/public/inlineSvg/payicons/paystack.svg'
import { ReactComponent as PayPalIcon } from '~/public/inlineSvg/payicons/paypal.svg'
import { WalletIcon } from '~/lib/icons'

import styles from './style'

const methods = {
    applepay: { label: 'ApplePay', icon: ApplePayIcon },
    paypal: { label: 'PayPal', icon: PayPalIcon },
    paystack: { label: 'Paystack', icon: PaystackIcon },
    stripe: { label: 'Stripe', icon: StripeIcon },
    cash: { label: 'Cash on Delivery', icon: WalletIcon },
}

function PayWith({ method = 'paystack', textSize = 1, iconSize = '2.5em', iconColor, textColor, simple, ...rest }) {
    const _method = methods[method]
    const isScale = !_method || method === 'cash'
    const { label, icon: Icon } = _method || { label: method, icon: WalletIcon }
    return (
        <Flex sx={styles.wrapper} {...rest}>
            <Icon width={iconSize} color={iconColor} transform={`scale(${isScale ? 0.8 : 1})`} />
            <Text ml={4} size={textSize} color={textColor}>
                {simple ? (
                    label
                ) : (
                    <>
                        Pay with{' '}
                        <Text as="span" weight="bold">
                            {label}
                        </Text>
                    </>
                )}
            </Text>
        </Flex>
    )
}

export default memo(PayWith)
