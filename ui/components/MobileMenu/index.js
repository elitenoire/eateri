import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Menu from 'react-burger-menu/lib/menus/scaleRotate'
import { MenuContext } from '~context/menu'
import Icon from '../Icon'
import Container from './style'

const MenuLink = ({ to, children, ...props }) => <Link href={to}>{children(props)}</Link>

const MobileMenu = ({ pastel, children }) => {
    const { isOpen, closeMenu, onStateChange, firstMenuItemRef } = useContext(MenuContext)

    useEffect(() => {
        Router.router.events.on('routeChangeStart', closeMenu)
        return () => Router.router.events.off('routeChangeStart', closeMenu)
    })

    return (
        <Container pastel={pastel} isOpen={isOpen}>
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
                {children.map(({ label, to, icon }, index) => (
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
        </Container>
    )
}

export default MobileMenu
