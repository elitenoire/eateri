import { Box } from '@theme-ui/components'
import { Text } from '~@core/typography'
import Hero from '../common/Hero'

import styles from './style'

import { ReactComponent as DeliverySvg } from '~/public/inlineSvg/delivery.svg'

export default function Delivery({ hideBackLink }) {
    return (
        <>
            <Hero
                bg="secondary.light"
                color="text"
                title="Food Delivery"
                text={
                    <>
                        Speedy
                        <Text as="span" weight="bold">
                            Delivery
                        </Text>
                        To your doorsteps
                    </>
                }
                svg={<DeliverySvg sx={styles.svgDelivery} />}
                sx={styles.cardDelivery}
                hideBackLink={hideBackLink}
            >
                <Text weight="light" color="textDark" size={7} mb={4}>
                    Have your order delivered straight to your door.
                </Text>
                <Text mb={3} size={3}>
                    At Eateri, you are never far from a great meal with a warm, inviting welcome. Enjoy an exquisite
                    dinining experience and create memorable moments with family and friends.
                </Text>
                <Text size={3}>
                    Our delicious buffet menu offers unmatched variety of quality, healthy dishes for your satisfaction.
                    We use only fresh premium ingredients for a taste that will have you coming back for more.
                </Text>
            </Hero>
            <Box p={13} />
        </>
    )
}
