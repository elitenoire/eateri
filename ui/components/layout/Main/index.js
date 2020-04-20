/** @jsx jsx */
import { useContext } from 'react'
import { jsx } from '@theme-ui/core'
import { MenuContext } from '~/context/menu'
import Header from '~@/navigation/Header'
import MobileSideMenu from '~@/navigation/MobileSideMenu'
import styles from './style'

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

const MainLayout = ({ children }) => {
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
        <div id="outer-container" sx={styles.container}>
            <MobileSideMenu>{menuItems}</MobileSideMenu>
            <div
                id="page-wrap"
                role="presentation"
                sx={isOpen ? styles.pageWrapOpen : styles.pageWrap}
                onClick={closeMenu}
            >
                <div
                    id="headroom-scroll"
                    className="hide-overflow"
                    role="presentation"
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    tabIndex={isOpen ? 0 : -1}
                    onKeyDown={preventTabbing}
                >
                    <Header isOpen={isOpen} toggleMenu={toggleMenu} />
                    <main role="main" sx={styles.mainStyle}>
                        {children}
                    </main>
                    <footer>Copywright Eateri 2020</footer>
                </div>
            </div>
        </div>
    )
}
export default MainLayout
