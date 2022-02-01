import Link from 'next/link'
import { Heading } from '~@core/typography'
import { Logo } from '~@core/general'
import { HoursBlock, ContactBlock, ChatButton, ReservationButton } from './common'

import { fwlStyles as styles } from './style'

function ActionButtons({ linkScroll }) {
    return (
        <div sx={styles.buttonWrap}>
            <ChatButton />
            <ReservationButton linkScroll={linkScroll} />
        </div>
    )
}

export default function FooterWithLinks({ linkScroll }) {
    return (
        <nav sx={styles.linkLayout}>
            <div className="block">
                <section>
                    <Heading as="h6" variant="block" mb="3" color="white" opacity={0.35}>
                        Explore
                    </Heading>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <a>Our Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/career">
                                <a>Career</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms">
                                <a>Terms</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy">
                                <a>Privacy</a>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="block">
                <section>
                    <Heading as="h6" variant="block" mb="3" color="white" opacity={0.35}>
                        Access
                    </Heading>
                    <ul>
                        <li>
                            <a>My Account</a>
                        </li>
                        <li>
                            <a>Link</a>
                        </li>
                        <li>
                            <a>Link</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <Heading as="h6" variant="block" mb="3" color="white" opacity={0.35}>
                        Help
                    </Heading>
                    <ul>
                        <li>
                            <Link href="/faqs">
                                <a>FAQs</a>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="block">
                <ContactBlock />
                <HoursBlock>
                    <ActionButtons linkScroll={linkScroll} />
                </HoursBlock>
            </div>
            <div className="block">
                <section>
                    <Link href="/" passHref>
                        <Logo plain link animated color="primary.base" />
                    </Link>
                    <ActionButtons linkScroll={linkScroll} />
                </section>
            </div>
        </nav>
    )
}
