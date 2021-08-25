/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Logo } from '~@/general'
import { Reveal, fadeInDown } from '~@/general/Reveal'
import { LeafletMap } from '~@/other'
import { HoursBlock, ContactBlock, ChatButton, ReservationButton } from './common'

import 'leaflet/dist/leaflet.css'

import { fwmStyles as styles } from './style'

export default function FooterWithMap({ linkScroll }) {
    return (
        <div sx={styles.mapLayout}>
            <Logo plain color="primary.base" sx={styles.logoBox} />
            <div sx={styles.footerContent}>
                <Reveal motion={fadeInDown} threshold={0.5} whenInView>
                    <div>
                        <ContactBlock className="footer-card" sx={styles.contactBlock}>
                            <ChatButton />
                        </ContactBlock>
                    </div>
                </Reveal>
                <div sx={styles.mapBlock}>
                    <LeafletMap />
                </div>
                <Reveal threshold={0.5} whenInView>
                    <div>
                        <HoursBlock className="footer-card" sx={styles.hoursBlock}>
                            <ReservationButton linkScroll={linkScroll} />
                        </HoursBlock>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}
