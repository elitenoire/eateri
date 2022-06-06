import { Container } from '@theme-ui/components'
import { Media } from '~/context/media'
import { Text, Heading } from '~@core/typography'
import { Reveal, fadeInLeft } from '~@core/general/Reveal'
import { Link } from '~@core/navigation'
import MakeReservation from '~@custom/reservation'
import { HASH_ID_RESERVATIONS } from '~/constants'

import { ReactComponent as ReservePatternL } from '~/public/inlineSvg/reserve-pattern-l.svg'
import { ReactComponent as ReservePatternR } from '~/public/inlineSvg/reserve-pattern-r.svg'
import { ReactComponent as ArrowDown } from '~/public/inlineSvg/arrow-down.svg'

import styles from './style'

function Reservation() {
    return (
        <>
            <Media lessThan="tabletS">
                <MakeReservation isSheet styled linear={false} />
            </Media>
            <Media greaterThanOrEqual="tabletS">
                <Container as="section" id={HASH_ID_RESERVATIONS} variant="loose" sx={styles.section}>
                    <div sx={styles.bgPattern}>
                        <ReservePatternL />
                        <ReservePatternR />
                    </div>
                    <Container as="header" variant="content" className="mobile-hidden">
                        <Reveal cascade whenInView>
                            <Text as="h2" variant="badgeLink" mb={2} bg="whiteFade.10" color="secondary.pale">
                                <Link href="/reservations">Reserve A Table</Link>
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
                    <MakeReservation ringed linear={false} />
                </Container>
            </Media>
        </>
    )
}

export default Reservation
