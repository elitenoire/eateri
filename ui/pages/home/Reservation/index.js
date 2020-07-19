/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import { Text, Heading } from '~@/typography'
import { Button, Divider, Icon } from '~@/general'
import { Step, StepList, StepProvider } from '~/components/navigation/Steps'

import StepFindTable from './StepFindTable'

import styles from './style'

const Reservation = () => (
    <Container as="section" id="homepage-reservation" variant="loose" sx={styles.section}>
        <Container variant="content" className="mobile-hidden">
            <Text as="h2" variant="block" mb={2} color="secondary.pale">
                Reserve A Table
            </Text>
            <Heading as="p" variant="h2" color="text" weight="extrabold" title>
                We've Got You Covered
            </Heading>
            <Text>
                Save time waiting for your meal by booking a table in advance. Reservations can be made up to 3 months
                maximum.
            </Text>
            <Text>We look forward to seeing you soon!</Text>
            <div className="visually-hidden">
                <p>Note that, the reservation process involves three steps.</p>
            </div>
        </Container>
        <div sx={styles.mobileHeader}>
            <Heading as="h3" variant="h4" mb={0}>
                Reservations
            </Heading>
            <button type="button" aria-label="Toggle reservation form">
                <Icon name="arrowopen" />
            </button>
        </div>
        <Container>
            <div data-show-halo="false" className="card-halo" sx={styles.selectWrap}>
                <div className="card-halo--content" sx={styles.selectLayout}>
                    <button type="button" sx={styles.selectButton}>
                        <div>
                            <Icon name="user" />
                            <Text size={0}>
                                Guests{' '}
                                <Text as="span" weight="medium">
                                    2
                                </Text>
                            </Text>
                            <Icon className="mobile-hidden" name="arrowdropdown" />
                        </div>
                    </button>
                    <Divider bg={['text', null, 'secondary.light']} my={1} mx={2} vertical />
                    <button type="button" sx={styles.selectButton}>
                        <div>
                            <Icon name="calendar" />
                            <Text size={0}>
                                Date{' '}
                                <Text as="span" weight="medium">
                                    18 Jul 2020
                                </Text>
                            </Text>
                            <Icon className="mobile-hidden" name="arrowdropdown" />
                        </div>
                    </button>
                    <Divider bg={['text', null, 'secondary.light']} my={1} mx={2} vertical />
                    <button type="button" sx={styles.selectButton}>
                        <div>
                            <Icon name="time" />
                            <Text size={0}>
                                Time{' '}
                                <Text as="span" weight="medium">
                                    17:00pm
                                </Text>
                            </Text>
                            <Icon className="mobile-hidden" name="arrowdropdown" />
                        </div>
                    </button>
                </div>
                <div className="card-halo--action mobile-hidden" sx={styles.action}>
                    <Button type="submit">Find Table</Button>
                </div>
            </div>
            <div data-show-halo="true" className="card-halo" sx={styles.formWrap}>
                <StepProvider linear={false}>
                    <StepList>
                        <Step index={0}>Find Table</Step>
                        <Step index={1}>Guest Details</Step>
                        <Step index={2}>Confirmation</Step>
                    </StepList>
                    <div id="steppanels">
                        <div id="steppanel-1">
                            <StepFindTable />
                        </div>
                    </div>
                </StepProvider>
            </div>
        </Container>
    </Container>
)

export default Reservation
