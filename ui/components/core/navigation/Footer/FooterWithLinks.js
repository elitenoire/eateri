import { Heading } from '~@core/typography'
import { Logo } from '~@core/general'
import { Link } from '~@core/navigation'
import { HoursBlock, ContactBlock, ChatButton, ReservationButton } from './common'

import { fwlStyles as styles } from './style'

function ActionButtons() {
    return (
        <div sx={styles.buttonWrap}>
            <ChatButton />
            <ReservationButton />
        </div>
    )
}

export default function FooterWithLinks() {
    return (
        <nav sx={styles.linkLayout}>
            <div className="block">
                <section>
                    <Heading as="h6" variant="block" mb="3" color="white" opacity={0.35}>
                        Explore
                    </Heading>
                    <ul>
                        <li>
                            <Link variant="capitalize" href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link variant="capitalize" href="/services">
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link variant="capitalize" href="/career">
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link variant="capitalize" href="/terms">
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link variant="capitalize" href="/privacy">
                                Privacy
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
                            <Link variant="capitalize" href="/myaccount">
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link variant="capitalize" href="#">
                                Link
                            </Link>
                        </li>
                        <li>
                            <Link variant="capitalize" href="#">
                                Link
                            </Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <Heading as="h6" variant="block" mb="3" color="white" opacity={0.35}>
                        Help
                    </Heading>
                    <ul>
                        <li>
                            <Link variant="capitalize" href="/faqs">
                                FAQs
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="block">
                <ContactBlock />
                <HoursBlock>
                    <ActionButtons />
                </HoursBlock>
            </div>
            <div className="block">
                <section>
                    <Logo href="/" link plain animated color="primary.base" />
                    <ActionButtons />
                </section>
            </div>
        </nav>
    )
}
