import NextLink from 'next/link'
import Avatar from 'boring-avatars'
import { useThemeUI } from '@theme-ui/core'
import { Box, Container, Link } from '@theme-ui/components'
import { Heading, Text } from '~@core/typography'
import { Icon } from '~@core/general'
import NavListItem from './NavListItem'
import { getLayout as getDefaultLayout } from '../DefaultLayout'

import styles from './style'

export default function AccountLayout({ children }) {
    const {
        theme: {
            colors: { primary, secondary },
        },
    } = useThemeUI()

    const colorScheme = [primary.light, secondary.hover]

    return (
        <Box bg="grayLight">
            <Container variant="maxi">
                <div sx={styles.wrapper}>
                    <div sx={styles.sidebar}>
                        <div sx={styles.badgeWrap}>
                            <NextLink href="/myaccount" passHref>
                                <Link variant="back" sx={styles.badge}>
                                    My Account
                                </Link>
                            </NextLink>
                        </div>
                        <div sx={styles.panel}>
                            <div sx={styles.nameBlock}>
                                <div sx={styles.avatarWrap}>
                                    <Avatar name="Eva Raymond" variant="beam" colors={colorScheme} />
                                </div>
                                <div sx={styles.nameDetails}>
                                    <Text weight="bold">Eva Raymond</Text>
                                    <Text size={0} color="textFade">
                                        Platinum
                                    </Text>
                                </div>
                                <div sx={styles.action} />
                            </div>
                            <nav>
                                <ul data-single sx={styles.navListBlock}>
                                    <NavListItem href="/" icon="dashboard" active>
                                        Account Overview
                                    </NavListItem>
                                </ul>
                                <ul sx={styles.navListBlock}>
                                    <NavListItem href="/" icon="orders">
                                        Orders
                                    </NavListItem>
                                    <NavListItem href="/" icon="reserved" lined>
                                        Reservations
                                    </NavListItem>
                                </ul>
                                <ul sx={styles.navListBlock}>
                                    <NavListItem href="/" icon="profile">
                                        My Details
                                    </NavListItem>
                                    <NavListItem href="/" icon="passwordalt" lined>
                                        Change Password
                                    </NavListItem>
                                    <NavListItem href="/" icon="addressbook" lined>
                                        Address Book
                                    </NavListItem>
                                    <NavListItem href="/" icon="bankcard" lined>
                                        Payment Methods
                                    </NavListItem>
                                    <NavListItem href="/" icon="socials" lined>
                                        Social accounts
                                    </NavListItem>
                                </ul>
                                <ul sx={styles.navListBlock}>
                                    <NavListItem href="/" icon="award">
                                        My Rewards
                                    </NavListItem>
                                    <NavListItem href="/" icon="coupon" lined>
                                        Gift Cards & Vouchers
                                    </NavListItem>
                                </ul>
                                <ul data-single sx={styles.navListBlock}>
                                    <NavListItem href="/" icon="signout">
                                        Sign out
                                    </NavListItem>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div sx={styles.content}>
                        <div sx={styles.header}>
                            <Text size={5}>
                                Hi{' '}
                                <Text as="span" weight="bold">
                                    Eva,
                                </Text>
                            </Text>
                            <Text size={1} color="textFade">
                                We have few things for you to look at
                            </Text>
                        </div>
                        <div sx={styles.overview}>{children}</div>
                    </div>
                </div>
            </Container>
        </Box>
    )
}
export function getLayout(page, props) {
    return getDefaultLayout(<AccountLayout {...props}>{page}</AccountLayout>, props)
}
