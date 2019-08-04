import React, { useContext } from 'react'
import { MenuContext } from '~context/menu'
import Header from '../Header'
import MobileMenu from '../MobileMenu'
import { Container, PageWrap } from './style'

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
        to: '/reservations',
        icon: 'reserved',
    },
]

const Layout = ({ pastel = true, children }) => {
    const { isOpen, closeMenu, toggleMenu, firstMenuItemRef } = useContext(MenuContext)

    const preventTabbing = e => {
        if (isOpen) {
            e.persist()
            if (e.keyCode === 9) {
                e.preventDefault()
                firstMenuItemRef.focus()
            }
        }
    }

    return (
        <Container id="outer-container" pastel={pastel}>
            <MobileMenu pastel={pastel}>{menuItems}</MobileMenu>
            <PageWrap id="page-wrap" isOpen={isOpen} onClick={closeMenu}>
                <div
                    id="headroom-scroll"
                    className="hide-overflow"
                    role="presentation"
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    tabIndex={isOpen ? 0 : -1}
                    onKeyDown={preventTabbing}
                >
                    <Header isOpen={isOpen} toggleMenu={toggleMenu} />
                    {children}
                    <footer>Copywright Eateri 2019</footer>
                </div>
            </PageWrap>
        </Container>
    )
}

export default Layout
