import { Badge } from '@theme-ui/components'
import { Text } from '~@core/typography'
import { StackGroup } from '~@core/display'
import { Avatar, Icon, Button } from '~@core/general'
import { Link } from '~@core/navigation'
import { PayWith } from '~@core/other'
import OverviewCard from '~@common/card/OverviewCard'
import FoodCard from '~@common/card/FoodCard'

import { getLayout as getAccountLayout } from '~@common/layout/AccountLayout'

import styles from '~/styles/myaccount'
import url from '~/public/dish.png'

function MyAccountPage() {
    return (
        <div>
            <OverviewCard icon="orders" title="Orders">
                <div sx={styles.twoRow}>
                    <div sx={styles.box}>
                        <div sx={styles.info}>
                            <Text size={1} weight="bold">
                                Recent Order
                            </Text>
                            <Text size={0} mb={2} color="textFade">
                                #00231
                            </Text>
                            <StackGroup mt={1} mb={2} total={8} max={2} size="2em">
                                <Avatar name="BI" ring={false} />
                                <Avatar name="CD" ring={false} />
                                <Avatar name="EA" ring={false} />
                            </StackGroup>
                            <Text size={0} color="textFade">
                                on{' '}
                                <Text as="span" weight="bold">
                                    02 Jan 2022
                                </Text>
                            </Text>
                            <Badge as="p" variant="accent">
                                pick up
                            </Badge>
                        </div>
                        <div sx={styles.boxAction}>
                            <Link href="#" variant="arrow:xs" color="grayDarker">
                                View
                            </Link>
                        </div>
                    </div>
                    <div sx={styles.box} data-design data-primary>
                        <div sx={styles.stats}>
                            <Text size={6} weight="bold">
                                8
                            </Text>
                            <Text size={0} mb={1} weight="bold">
                                Orders
                            </Text>
                            <Text size={0} color="text">
                                January, 2022
                            </Text>
                        </div>
                    </div>
                </div>
            </OverviewCard>
            <OverviewCard icon="reserved" title="Reservations">
                <div sx={styles.twoRow}>
                    <div sx={styles.box}>
                        <div sx={styles.info}>
                            <Text size={1} weight="bold">
                                Recent Reservation
                            </Text>
                            <Text size={0} mb={2} color="textFade">
                                #GHYUBV
                            </Text>
                            <Text size={0} color="textFade">
                                for{' '}
                                <Text as="span" weight="bold" color="accent.base">
                                    Jay Burg
                                </Text>
                            </Text>
                            <Text size={0} color="textFade">
                                on{' '}
                                <Text as="span" weight="bold">
                                    16 Apr 2022
                                </Text>{' '}
                                at{' '}
                                <Text as="span" weight="bold">
                                    18:35 PM
                                </Text>
                            </Text>
                            <Badge as="p" variant="primary">
                                confirmed
                            </Badge>
                        </div>
                        <div sx={styles.boxAction}>
                            <Link href="#" variant="arrow:xs" color="grayDarker">
                                View
                            </Link>
                        </div>
                    </div>
                    <div sx={styles.box} data-design data-accent>
                        <div sx={styles.stats}>
                            <Text size={6} weight="bold">
                                0
                            </Text>
                            <Text size={0} mb={1} weight="bold">
                                Reservations
                            </Text>
                            <Text size={0} color="text">
                                January, 2022
                            </Text>
                        </div>
                    </div>
                </div>
            </OverviewCard>

            <OverviewCard icon="heart" title="My Wishlist">
                <div sx={styles.box}>
                    <div sx={styles.boxHeader}>
                        <Text size={0} color="textFade">
                            Latest products saved:
                        </Text>
                    </div>
                    <div sx={styles.wishBox}>
                        <div sx={styles.cardWrap}>
                            <FoodCard imgUrl={url} rating="" title="Chicken Briyani soup" shadow="none" fluid onClick />
                        </div>
                        <div sx={styles.cardWrap}>
                            <FoodCard
                                imgUrl={url}
                                rating=""
                                title="Teriyaki Sauce & Rice"
                                shadow="none"
                                fluid
                                onClick
                            />
                        </div>
                    </div>
                    <div sx={styles.wishBoxAction}>
                        <Button brand="subtle" bg="gray" outlineColor="grayMedium" outline fluid>
                            More
                        </Button>
                    </div>
                </div>
            </OverviewCard>

            <div sx={styles.twoColumn}>
                <OverviewCard icon="profile" title="My Details">
                    <div sx={styles.box}>
                        <div sx={styles.info}>
                            <Text size={0} color="primary.base" weight="bold">
                                Miss
                            </Text>
                            <Text size={3} weight="bold" line="tight">
                                Eva
                            </Text>
                            <Text size={3} weight="bold" line="tight" mb={2}>
                                Raymond
                            </Text>
                            <Text size={0} mb={2} line="tight" sx={styles.flex}>
                                <span sx={styles.iconWrap}>
                                    <Icon name="cake" />
                                </span>
                                29th September 1973
                            </Text>
                            <Text size={0} line="tight" wordBreak sx={styles.flex}>
                                <span sx={styles.iconWrap}>
                                    <Icon name="mail" />
                                </span>
                                testmail1087@gmail.com
                            </Text>
                        </div>
                        <div sx={styles.boxAction}>
                            <Link href="#" variant="arrow:xs" color="grayDarker">
                                View
                            </Link>
                        </div>
                    </div>
                </OverviewCard>
                <OverviewCard icon="addressbook" title="Address Book">
                    <div sx={styles.box}>
                        <div sx={styles.info}>
                            <Text size={0} color="primary.base" weight="bold">
                                Home
                            </Text>
                            <Text size={3} weight="bold" line="tight" mb={2}>
                                Nigeria
                            </Text>
                            <Text size={0} mb={2} line="tight" sx={styles.flex}>
                                <span sx={styles.iconWrap}>
                                    <Icon name="useralt" />
                                </span>
                                Miss. Eva Raymond
                            </Text>
                            <Text size={0} mb={2} line="tight" sx={styles.flex}>
                                <span sx={styles.iconWrap}>
                                    <Icon name="location" />
                                </span>
                                25A Upper Marshall Street, Postbox Apartments, Central District, Abuja, 900108
                            </Text>
                            <Text size={0} mb={2} line="tight" sx={styles.flex}>
                                <span sx={styles.iconWrap}>
                                    <Icon name="phone" />
                                </span>
                                07034587655
                            </Text>
                            <Badge as="p" variant="secondary">
                                Default
                            </Badge>
                        </div>
                        <div sx={styles.boxAction}>
                            <Link href="#" variant="arrow:xs" color="grayDarker">
                                View
                            </Link>
                        </div>
                    </div>
                </OverviewCard>
            </div>
            <OverviewCard icon="bankcard" title="Payments">
                <div sx={styles.box}>
                    <div sx={styles.payWrap}>
                        <PayWith mr={1} method="stripe" />
                        <Badge as="p" variant="secondary">
                            Default
                        </Badge>
                    </div>
                </div>
                <div sx={styles.payAction}>
                    <Text as="a" size={1} weight="bold" decoration="underline" color="grayDarker">
                        Change
                    </Text>
                </div>
            </OverviewCard>
        </div>
    )
}

MyAccountPage.getLayout = getAccountLayout

export default MyAccountPage
