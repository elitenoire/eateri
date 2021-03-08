/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'
import { useRef, useState } from 'react'
import Headroom from 'react-headroom'
import { Button, Logo } from '~@/general'
import useLayoutEffect from '~/hooks/useBrowserLayoutEffect'
import useScrollTo from '~/hooks/useScrollTo'
import { HASH_ID_CONTACT, HASH_ID_RESERVATIONS } from '~/constants'
import styles from './style'

const ariaLabels = {
    cart: 'Items in cart',
    user: 'My account',
    hmenu: 'Open menu',
}

const NavLinks = ({ children, ...rest }) => {
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

const Header = ({ isOpen, toggleMenu }) => {
    const [scrollbarWidth, setScrollbarWidth] = useState(0)
    const [headerHeight, setHeaderHeight] = useState(0)
    const headerRef = useRef({})

    // Workaround to recalculate headroom height on resize as non-parent window is unsupported
    // Use to trigger a rerender on resize, not necessarily need the height as that is calculated by headroom
    useLayoutEffect(() => {
        // Get non-parent window
        const elem = document.getElementById('headroom-scroll')

        // timeoutId for debounce mechanism
        let timeoutId = null

        const onResize = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight)
            }
            // Calculate scrollbar width
            setScrollbarWidth(elem.offsetWidth - elem.clientWidth)
        }

        const debouncedResizeHandler = (delay = 150) => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId)
            // change width from the state object after 150 milliseconds
            onResize()
            timeoutId = setTimeout(onResize, delay)
        }
        onResize()
        window.addEventListener('resize', debouncedResizeHandler)
        return () => {
            window.removeEventListener('resize', debouncedResizeHandler)
        }
    }, [])

    return (
        <Headroom
            disableInlineStyles={isOpen}
            parent={() => document.getElementById('headroom-scroll')}
            // style={{
            // 	width: withShadow ? `calc(100% - ${scrollbarWidth}px)` : '100%',
            // }}
            calcHeightOnResize={false}
            sx={styles.header(scrollbarWidth, headerHeight)}
        >
            <div ref={headerRef} sx={styles.container}>
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
                    <Button brand="ghost" color="secondary" size="lg" icon="cart" ariaLabel={ariaLabels.cart} />
                    <Button brand="outline" color="secondary" size="sm" icon="user" ariaLabel={ariaLabels.user} />
                </div>
            </div>
        </Headroom>
    )
}

export default Header
