/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Head from 'next/head'
import { Logo } from '~@/general'
import { Reveal, fadeInDown } from '~@/general/Reveal'
import { LeafletMap } from '~@/other'
import { HoursBlock, ContactBlock, ChatButton, ReservationButton } from './common'

import { fwmStyles as styles } from './style'

export default function FooterWithMap({ linkScroll }) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                    crossOrigin=""
                />
            </Head>
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
        </>
    )
}
