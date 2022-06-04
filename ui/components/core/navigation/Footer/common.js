import { Heading, Text } from '~@core/typography'
import { Icon, Button } from '~@core/general'
import { LinkButton, Link } from '~@core/navigation'

export function ChatButton() {
    return (
        <Button size="sm" icon="chat">
            Need to chat?
        </Button>
    )
}

export function ReservationButton() {
    return (
        <LinkButton href="/reserve" size="sm" brand="outline">
            Reserve Now
        </LinkButton>
    )
}

export function ContactBlock({ children, ...rest }) {
    return (
        <section {...rest}>
            <Heading as="h6" variant="block" mb="3" color="white" opacity={0.35}>
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
                        <Link href="tel:+2348000004444" rel="nofollow" external>
                            080 0000 4444
                        </Link>
                    </span>
                </li>
                <li>
                    <Icon name="mail" />
                    <span>
                        <Link href="mailto:hello@eateri.com" rel="nofollow" external>
                            hello@eateri.com
                        </Link>
                    </span>
                </li>
            </ul>
            {children}
        </section>
    )
}

export function HoursBlock({ children, ...rest }) {
    return (
        <section {...rest}>
            <Heading as="h6" variant="block" mb="3" color="white" opacity={0.35}>
                Opening Hours
            </Heading>
            <ul>
                <li>
                    10:00am - 9:00pm{' '}
                    <Text as="span" color="primary.light" weight="medium" size={1}>
                        (Mon - Fri)
                    </Text>
                </li>
                <li>
                    11:00am - 10:30pm{' '}
                    <Text as="span" color="primary.light" weight="medium" size={1}>
                        (Sat - Sun)
                    </Text>
                </li>
            </ul>
            {children}
        </section>
    )
}
