import { useRef } from 'react'
import { Box } from '@theme-ui/components'
import { Menu, MenuButton, MenuArrow, MenuItem, MenuSeparator, useMenuState } from 'ariakit/menu'
import { Button, ButtonAria, Avatar } from '~@core/general'
import { Link, LinkButton } from '~@core/navigation'
import { List, ListItem, ListSeparator } from '~@core/display'

export default function UserMenu() {
    const firstItemRef = useRef()
    const menu = useMenuState({ animated: true, focusLoop: true })

    return (
        <>
            <MenuButton
                as={Button}
                state={menu}
                brand="ghost"
                color="secondary"
                ml="tiny"
                py={1}
                px={2}
                size="lg"
                title="My Account"
                aria-label="Open my account menu"
                active={menu.visible}
                ghostText
                dropdown
            >
                <Avatar name="Eva Raymond" size="1.95em" mr={1} />
            </MenuButton>
            <Menu
                as={List}
                state={menu}
                variant="dropdown"
                aria-label="My Account"
                transformOrigin="top right"
                animated
                initialFocusRef={firstItemRef}
            >
                <MenuArrow as={Box} color="white" />
                <MenuItem
                    ref={firstItemRef}
                    as={ListItem}
                    use={Link}
                    href="/myaccount"
                    title="Eva R."
                    text="Edit profile"
                    extra="usersmile"
                    extraColor="primary.base"
                    extraBoxedBg="primary.pale"
                    extraSize={3}
                    extraBoxed
                />
                <MenuSeparator as={ListSeparator} />
                <MenuItem as={ListItem} use={Link} icon="dashboard" href="/myaccount">
                    Account
                </MenuItem>
                <MenuItem as={ListItem} use={Link} icon="orders" href="#">
                    Orders
                </MenuItem>
                <MenuItem as={ListItem} use={Link} icon="reserved" href="#">
                    Reservations
                </MenuItem>
                <MenuItem as={ListItem} use={Link} icon="heart" href="#">
                    Wishlist
                </MenuItem>
                <MenuItem as={ListItem} use={Link} icon="award" href="#">
                    Rewards
                </MenuItem>
                <MenuSeparator as={ListSeparator} />
                <MenuItem as={ListItem} use={ButtonAria} icon="signout">
                    Sign Out
                </MenuItem>
                <MenuSeparator as={ListSeparator} />
                <MenuItem as={LinkButton} brand="pale" size={2} mx={2} opaque href="/menu">
                    Order Food
                </MenuItem>
            </Menu>
        </>
    )
}
