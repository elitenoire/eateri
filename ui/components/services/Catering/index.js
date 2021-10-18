import { Box } from '@theme-ui/components'
import { Text } from '~@/typography'
import Hero from '../common/Hero'

import styles from './style'

import CateringSvg from '~/public/inlineSvg/catering.svg'

export default function Catering({ hideBackLink }) {
    return (
        <>
            <Hero
                bg="primary.base"
                cardBg="secondary.base"
                color="accent.base"
                title="Events & Catering"
                text={
                    <>
                        Share real food, make it <span>MEMORABLE</span>
                    </>
                }
                svg={<CateringSvg sx={styles.svgCatering} />}
                sx={styles.cardCatering}
                hideBackLink={hideBackLink}
            >
                <Text weight="light" color="textDark" size={7} mb={4}>
                    Custom menus, delicious food to complement any event.
                </Text>
                <Text>
                    Need to feed a group? Whatever the occasion, we have spaces perfect to host your group. With a
                    choice of crafted party menus, specially selected drinks packages and a dedicated team, you’ll find
                    all the ingredients for an event to remember.
                </Text>
            </Hero>
            <Box p={13} />
        </>
    )
}
