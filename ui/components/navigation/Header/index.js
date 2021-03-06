/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import Headroom from 'react-headroom'
import { Button, Logo } from '~@/general'
import useScrollTo from '~/hooks/useScrollTo'
import useOnClickOutside from '~/hooks/useOnClickOutside'
import { HASH_ID_CONTACT, HASH_ID_RESERVATIONS } from '~/constants'
import styles from './style'

const ariaLabels = {
    cart: 'Items in cart',
    user: 'Accounts',
    hmenu: 'Navigate',
    search: 'Explore food',
}

function NavLinks({ children, ...rest }) {
    const { linkScroll } = useScrollTo({ offset: 20 })
    return (
        <nav {...rest}>
            <ul>
                {children.map(link => {
                    if (link.charAt(0) === '#') {
                        return (
                            <li key={link}>
                                <a href={link} onClick={linkScroll}>
                                    {link.charAt(1).toUpperCase() + link.slice(2)}
                                </a>
                            </li>
                        )
                    }
                    return (
                        <li key={link}>
                            <Link href={link}>
                                <a>{link.charAt(1).toUpperCase() + link.slice(2)}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

function Header({ isOpen, toggleMenu }) {
    const headerRef = useRef()
    const [show, setShow] = useState(false)

    const toggle = useCallback(() => {
        setShow(_show => !_show)
    }, [])

    const close = useCallback(() => {
        setShow(false)
    }, [])

    useOnClickOutside(headerRef, close)

    return (
        <Headroom onUnpin={close} disableInlineStyles={isOpen} sx={styles.header}>
            <div ref={headerRef} sx={styles.container}>
                <div sx={styles.toggleWrap}>
                    <Button
                        brand="outline"
                        color="secondary"
                        icon="hamburger"
                        size="lg"
                        ariaLabel={ariaLabels.hmenu}
                        onClick={toggleMenu}
                        borderless
                    />
                    <Button
                        brand="outline"
                        color="secondary"
                        icon={show ? 'close' : 'hamburger'}
                        size="lg"
                        ariaLabel={ariaLabels.hmenu}
                        onClick={toggle}
                        borderless
                    />
                </div>
                <Link href="/" passHref>
                    <Logo
                        aria-label="Eateri Home"
                        title="Eateri Home"
                        link
                        animated
                        color="secondary"
                        sx={styles.logoBox}
                    />
                </Link>
                <NavLinks sx={styles.navlinks} data-collapse={show ? '' : null}>
                    {['/menu', '/about', `#${HASH_ID_CONTACT}`, `#${HASH_ID_RESERVATIONS}`]}
                </NavLinks>
                <div sx={styles.actions}>
                    <Button brand="ghost" color="secondary" size="lg" icon="search" ariaLabel={ariaLabels.search} />
                    <Button
                        brand="ghost"
                        color="secondary"
                        size="lg"
                        icon="cart"
                        ariaLabel={ariaLabels.cart}
                        sx={styles.cartButton}
                    />
                    <Button brand="outline" color="secondary" size="lg" icon="user" ariaLabel={ariaLabels.user} />
                </div>
            </div>
        </Headroom>
    )
}

export default Header
