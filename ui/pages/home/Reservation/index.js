/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import { Media } from '~/context/media'

import { Text, Heading } from '~@/typography'
import { Reveal, fadeInLeft } from '~@/general/Reveal'
import { StepProvider } from '~@/navigation/Steps'
import { HASH_ID_RESERVATIONS } from '~/constants'
import MobileSheet from './MobileSheet'
import MakeReservation from './MakeReservation'

import ReservePatternL from '~/public/inlineSvg/reserve-pattern-l.svg'
import ReservePatternR from '~/public/inlineSvg/reserve-pattern-r.svg'
import ArrowDown from '~/public/inlineSvg/arrow-down.svg'

import styles from './style'

/** StepProvider is at the root to make its Context
    available to both the mobile sheet and form Dialog.
    Reason: reset step whenever the modal/dialog closes.
*/

function Reservation() {
    return (
        <StepProvider linear={false}>
            <Media lessThan="tabletS">
                <MobileSheet>
                    <MakeReservation isMobile />
                </MobileSheet>
            </Media>
            <Media greaterThanOrEqual="tabletS">
                <Container as="section" id={HASH_ID_RESERVATIONS} variant="loose" sx={styles.section}>
                    <div sx={styles.bgPattern}>
                        <ReservePatternL />
                        <ReservePatternR />
                    </div>
                    <Container variant="content" className="mobile-hidden">
                        <Reveal cascade whenInView>
                            <Text as="h2" variant="badge" mb={2} bg="whiteFade.10" color="secondary.pale">
                                Reserve A Table
                            </Text>
                            <Heading as="p" variant="headline" color="text" title>
                                We've Got You Covered
                            </Heading>
                            <Text color="textFade" spacing="wider" size={3}>
                                Save time waiting for your meal by booking a table in advance. Reservations can be made
                                up to 3 months maximum.
                            </Text>
                            <Text color="textFade" spacing="wider" size={3}>
                                We look forward to seeing you soon!
                            </Text>
                        </Reveal>
                        <Reveal whenInView motion={fadeInLeft}>
                            <div sx={styles.arrowDown}>
                                <ArrowDown />
                            </div>
                        </Reveal>
                        <div className="visually-hidden">
                            <p>Note that, the reservation process involves three steps.</p>
                        </div>
                    </Container>
                    <MakeReservation />
                </Container>
            </Media>
        </StepProvider>
    )
}

export default Reservation
