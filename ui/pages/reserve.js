import Image from 'next/image'
import { Container, Box } from '@theme-ui/components'
import { Heading, Text } from '~@core/typography'
import { Reveal, Icon, ButtonBase } from '~@core/general'
import { Link } from '~@core/navigation'
import { Collapsible } from '~@core/display'
import MakeReservation from '~@custom/reservation'

import styles from '~/styles/reserve'

function ReservationPage() {
    return (
        <Container variant="maxiBase" pt={8} pb={13}>
            <Container as="header" variant="content" mb={0}>
                <Reveal cascade whenInView>
                    <Heading as="h1" variant="intro" color="text" title>
                        Bookings & <span className="underline">Enquiries</span>
                    </Heading>
                    <Text variant="h6" weight="normal" color="textFade">
                        Call us at{' '}
                        <Text as="span" weight="bold">
                            <Link
                                variant="plain"
                                weight="bold"
                                color="text"
                                hoverColor="primary.hover"
                                href="tel:+2348000004444"
                                rel="nofollow"
                                external
                            >
                                080 0000 4444
                            </Link>{' '}
                        </Text>
                        or book a table below.
                    </Text>
                </Reveal>
            </Container>
            <Container>
                <Reveal delay={150} whenInView>
                    <div>
                        <MakeReservation />
                    </div>
                </Reveal>
                <Reveal cascade whenInView>
                    <Box pt={10}>
                        <Text mb={6}>
                            Reservations help us ensure <strong>faster service</strong> when you arrive whether you are
                            a <em>large group</em> or a <em>table for two</em>. <strong>Book a table</strong> ahead of
                            time for a swifter and pleasant dining experience with us!{' '}
                            <small>- demo source from samudhra.com</small>
                        </Text>
                        <Text mb={6}>
                            Please note that{' '}
                            <strong>Eateri Restaurant is open Monday - Sunday from 5pm - 10pm for dinner</strong> and{' '}
                            <strong>online reservations are available for 1-8 guests up to 3 months in advance</strong>.
                        </Text>
                        <Text>
                            For larger bookings or private parties{' '}
                            <strong>
                                please email{' '}
                                <Link href="mailto:hello@eateri.com" rel="nofollow" hoverColor="primary.hover" external>
                                    hello@eateri.com
                                </Link>{' '}
                                or make an enquiry
                            </strong>
                            .
                        </Text>
                    </Box>
                    <div sx={styles.flex}>
                        <div sx={styles.imageWrap}>
                            <Image
                                src="/eateri-spot.jpg"
                                alt="eateri restuarant setting"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="hover-scale"
                            />
                        </div>
                        <ButtonBase sx={styles.enquiryBox}>
                            <Text as="span" variant="title" weight="bold" line="heading" align="center" size={7}>
                                Make an Enquiry
                            </Text>
                            <Icon name="chat" />
                        </ButtonBase>
                    </div>
                </Reveal>
                <div>
                    <Heading className="underline" display="inline-block" transform="uppercase" size={5} mb={4} title>
                        Faqs about Reservations
                    </Heading>
                    <Reveal as="ul" cascade whenInView>
                        <Box as="li" mb={4}>
                            <Collapsible>
                                <Collapsible.Heading use="h3">How to book a table?</Collapsible.Heading>
                                <Collapsible.Panel>
                                    We recommend that all reservations are booked online. We do offer our entire
                                    reservation inventory there. If you can not find a table on the date and time you
                                    are searching for, that means we are full for that day.{' '}
                                    <small>- demo source from thepinkdoor.net</small>
                                </Collapsible.Panel>
                            </Collapsible>
                        </Box>
                        <Box as="li" mb={4}>
                            <Collapsible>
                                <Collapsible.Heading use="h3">Can we book for a large group?</Collapsible.Heading>
                                <Collapsible.Panel>
                                    We only accept reservations for parties of 6 or less. Sorry, but we do not split
                                    large groups between two tables. <small>- demo source from thepinkdoor.net</small>
                                </Collapsible.Panel>
                            </Collapsible>
                        </Box>
                        <Box as="li" mb={4}>
                            <Collapsible>
                                <Collapsible.Heading use="h3">Do you accept walk-ins?</Collapsible.Heading>
                                <Collapsible.Panel>
                                    Yes we do! Just drop by and we will get you seated as soon as we can depending on
                                    availability. We accept walk-in parties of 6 or less. (Please note: We do
                                    ocassionally have to shut down our waiting list if it becomes too full.){' '}
                                    <small>- demo source from thepinkdoor.net</small>
                                </Collapsible.Panel>
                            </Collapsible>
                        </Box>
                    </Reveal>
                </div>
            </Container>
        </Container>
    )
}

export default ReservationPage
