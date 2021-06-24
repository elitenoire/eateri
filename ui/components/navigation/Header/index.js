/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'
import Headroom from 'react-headroom'
import { Button, Logo } from '~@/general'
import useScrollTo from '~/hooks/useScrollTo'
import { HASH_ID_CONTACT, HASH_ID_RESERVATIONS } from '~/constants'
import styles from './style'

const ariaLabels = {
    cart: 'Items in cart',
    user: 'My account',
    hmenu: 'Open menu',
    search: 'Search menu',
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
    return (
        <Headroom disableInlineStyles={isOpen} sx={styles.header}>
            <div sx={styles.container}>
                <Button
                    id="toggle-menu"
                    brand="outline"
                    color="secondary"
                    icon="hamburger"
                    size="lg"
                    ariaLabel={ariaLabels.hmenu}
                    onClick={toggleMenu}
                    borderless
                />
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
                <NavLinks sx={styles.navlinks}>
                    {['/menu', '/about', `#${HASH_ID_CONTACT}`, `#${HASH_ID_RESERVATIONS}`]}
                </NavLinks>
                <div sx={styles.actions}>
                    <Button brand="ghost" color="secondary" size="lg" icon="search" ariaLabel={ariaLabels.search} />
                    <Button brand="ghost" color="secondary" size="lg" icon="cart" ariaLabel={ariaLabels.cart} />
                    <Button brand="outline" color="secondary" size="lg" icon="user" ariaLabel={ariaLabels.user} />
                </div>
            </div>
        </Headroom>
    )
}

export default Header
