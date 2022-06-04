import { Logo, Reveal, fadeInDown } from '~@core/general'
import { LeafletMap } from '~@core/other'
import { HoursBlock, ContactBlock, ChatButton, ReservationButton } from './common'

import { fwmStyles as styles } from './style'

export default function FooterWithMap() {
    return (
        <div sx={styles.mapLayout}>
            <Logo plain color="primary.base" size={5} />
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
                            <ReservationButton />
                        </HoursBlock>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}
