/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Heading, Text } from '~@/typography'
import { Icon, Button } from '~@/general'
import { HASH_ID_RESERVATIONS } from '~/constants'

export function ChatButton() {
    return (
        <Button size="sm" icon="chat">
            Need to chat?
        </Button>
    )
}

export function ReservationButton({ linkScroll }) {
    return (
        <Button href={`#${HASH_ID_RESERVATIONS}`} size="sm" brand="outline" link onClick={linkScroll}>
            Reserve Now
        </Button>
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
