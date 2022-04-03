import { Box } from '@theme-ui/components'
import { Text } from '~@core/typography'
import Hero from '../common/Hero'

import styles from './style'

import { ReactComponent as TakeawaySvg } from '~/public/inlineSvg/takeouts.svg'

export default function Takeaway({ hideBackLink }) {
    return (
        <>
            <Hero
                bg="primary.base"
                color="textOnPrimary"
                title="Click + Collect"
                text={
                    <>
                        The
                        <Text as="span">Perfect</Text>
                        Grab-n-go!
                    </>
                }
                svg={<TakeawaySvg sx={styles.svgTakeaway} />}
                hideBackLink={hideBackLink}
            >
                <Text weight="light" color="textDark" size={7} mb={4}>
                    Grab a taste of Eateri to go, ready when you are...
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
