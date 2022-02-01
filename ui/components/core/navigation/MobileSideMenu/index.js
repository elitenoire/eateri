import { useContext, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Menu from 'react-burger-menu/lib/menus/scaleRotate'
import { Icon } from '~@core/general'
import { MenuContext } from '~/context/menu'
import useSafeTimeout from '~/hooks/useSafeTimeout'
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

function MenuLink({ to, children, ...rest }) {
    return <Link href={to}>{children(rest)}</Link>
}

function MobileSideMenu() {
    const { isOpen, closeMenu, firstMenuItemRef } = useContext(MenuContext)
    const htmlElementRef = useRef()
    const timerRef = useRef()
    const { safeSetTimeout, safeClearTimeout } = useSafeTimeout()

    useEffect(() => {
        htmlElementRef.current = document.querySelector('html')
    }, [])

    useEffect(() => {
        Router.router.events.on('routeChangeStart', closeMenu)
        return () => Router.router.events.off('routeChangeStart', closeMenu)
    })

    const onStateChange = useCallback(state => {
        if (state.isOpen) {
            // apply height 100%
            htmlElementRef.current.classList.add('height-100')
        } else {
            // remove height-100% after close animation
            safeClearTimeout(timerRef.current)
            timerRef.current = safeSetTimeout(() => {
                htmlElementRef.current.classList.remove('height-100')
            }, 500)
        }
    }, [])

    return (
        <div sx={style(isOpen)}>
            <Menu
                onStateChange={onStateChange}
                isOpen={isOpen}
                pageWrapId="page-wrap"
                onClose={closeMenu}
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
