/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Head from 'next/head'
import { Image } from '@theme-ui/components'
import { Heading, Text } from '~@/typography'
import { Icon, Logo, Button } from '~@/general'
import { Reveal, popIn, fadeInRight, fadeInDown } from '~@/general/Reveal'
import { InputBar } from '~@/form'
import { SocialMedia, LeafletMap } from '~@/other'

import payIconsUrl from '~/public/pay-icons.svg'
import styles from './style'

const Footer = () => (
    <>
        <Head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                crossOrigin=""
            />
        </Head>
        <footer sx={styles.footer}>
            <div sx={styles.footerSlide}>
                <div sx={styles.container}>
                    <div sx={styles.newsletterWrap}>
                        <Reveal motion={popIn} delay={400} whenInView>
                            <>
                                <div sx={styles.iconWrap}>
                                    <Icon name="newsletter" />
                                </div>
                            </>
                        </Reveal>
                        <div sx={styles.flexWrap}>
                            <Reveal as="div" sx={styles.newsletterText} motion={fadeInRight} cascade whenInView>
                                <Heading variant="h2" title color="primary.base">
                                    Don't miss out!
                                </Heading>
                                <Text size={3}>Stay up-to-date with our exciting news and exclusive deals.</Text>
                                <Text size={3}>No spam, we promise.</Text>
                            </Reveal>
                            <div sx={styles.formWrap}>
                                <InputBar sx={styles.inputBar} placeholder="Your email...">
                                    <Button margin={0}>Subscribe</Button>
                                </InputBar>
                            </div>
                        </div>
                    </div>
                    <div sx={styles.footerContentWrap}>
                        <Logo plain color="primary.base" sx={styles.logoBox} />
                        <div sx={styles.footerContent}>
                            <Reveal motion={fadeInDown} threshold={0.5} whenInView>
                                <div id="home-contact" className="footer-card" sx={styles.contactBlock}>
                                    <Heading variant="h6" color="primary.light">
                                        Contact
                                    </Heading>
                                    <ul>
                                        <li>
                                            <Icon name="location" />
                                            <span>24 Garden Court, Abuja</span>
                                        </li>
                                        <li>
                                            <Icon name="phone" />
                                            <span>
                                                <a href="tel:08000004444" rel="nofollow">
                                                    080 0000 4444
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <Icon name="mail" />
                                            <span>
                                                <a href="mailto:hello@eateri.com" rel="nofollow">
                                                    hello@eateri.com
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                    <Button size="sm" mx={0} icon="chat">
                                        Need to chat?
                                    </Button>
                                </div>
                            </Reveal>
                            <div sx={styles.mapBlock}>
                                <LeafletMap />
                            </div>
                            <Reveal threshold={0.5} whenInView>
                                <div className="footer-card" sx={styles.hoursBlock}>
                                    <Heading variant="h6" color="primary.light">
                                        Opening Hours
                                    </Heading>
                                    <Text size={1} mb={2}>
                                        10:00am - 9:00pm <span>(Mon - Fri)</span>
                                    </Text>
                                    <Text size={1} mb={2}>
                                        11:00am - 10:30pm <span>(Sat - Sun)</span>
                                    </Text>
                                    <Button size="sm" mx={0} brand="outline">
                                        Reserve Now
                                    </Button>
                                    <div sx={styles.socialMediaWrap}>
                                        <SocialMedia />
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
            <div sx={styles.footerReveal}>
                <div sx={styles.footerRevealPane} />
                <div sx={styles.footerRevealContent}>
                    <Text weight="bold" variant="title">
                        &#128081; The <span sx={styles.specialUnderline}>Messi</span> of Great Food &#128081;
                    </Text>
                </div>
            </div>
            <div sx={styles.copywright}>
                <Text size={1} spacing="wide">
                    © 2021 Eateri Inc by{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/elitenoire">
                        @elitenoire
                    </a>{' '}
                    · Made with &#128153;
                </Text>
                <div sx={styles.payIcons}>
                    <Icon name="lock" />
                    <Image src={payIconsUrl} />
                </div>
            </div>
        </footer>
    </>
)

export default Footer
