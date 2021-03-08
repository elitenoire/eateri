/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Menu from 'react-burger-menu/lib/menus/scaleRotate'
import { MenuContext } from '~/context/menu'
import Icon from '~@/general/Icon'
import style from './style'

const menuItems = [
    {
        label: 'About',
        to: '/about',
        icon: 'profile',
    },
    {
        label: 'Menu',
        to: '/menu',
        icon: 'menu',
    },
    {
        label: 'Gallery',
        to: '/gallery',
        icon: 'gallery',
    },
    {
        label: 'Contact Us',
        to: '#contact',
        icon: 'phone',
    },
    {
        label: 'Reservations',
        to: '#reservations',
        icon: 'reserved',
    },
]

const MenuLink = ({ to, children, ...props }) => <Link href={to}>{children(props)}</Link>

const MobileSideMenu = () => {
    const { isOpen, closeMenu, onStateChange, firstMenuItemRef } = useContext(MenuContext)

    useEffect(() => {
        Router.router.events.on('routeChangeStart', closeMenu)
        return () => Router.router.events.off('routeChangeStart', closeMenu)
    })

    return (
        <div sx={style(isOpen)}>
            <Menu
                onStateChange={onStateChange}
                isOpen={isOpen}
                pageWrapId="page-wrap"
                outerContainerId="outer-container"
                width="100%"
                customBurgerIcon={false}
                customCrossIcon={<Icon name="close" />}
                noOverlay
                disableAutoFocus
            >
                {menuItems.map(({ label, to, icon }, index) => (
                    <MenuLink to={to} key={index + label}>
                        {linkProps => (
                            <a ref={index ? undefined : firstMenuItemRef} {...linkProps}>
                                <Icon name={icon} />
                                {label}
                            </a>
                        )}
                    </MenuLink>
                ))}
            </Menu>
        </div>
    )
}

export default MobileSideMenu
