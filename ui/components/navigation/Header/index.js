/** @jsx jsx */
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Headroom from 'react-headroom'
import { jsx } from '@theme-ui/core'
import { Button, Logo } from '~@/general'
import LogoText from '~/public/inlineSvg/logo-tt.svg'
import styles from './style'

const ariaLabels = {
    cart: 'Items in cart',
    user: 'My account',
    hmenu: 'Open menu',
}

const NavLinks = ({ children, ...rest }) => (
    <nav {...rest}>
        <ul>
            {children.map(link => (
                <li key={link.slice(1)}>
                    <Link href={link}>
                        <a>{link.charAt(1).toUpperCase() + link.slice(2)}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
)

const Header = ({ isOpen, toggleMenu }) => {
    const [scrollbarWidth, setScrollbarWidth] = useState(0)
    const [headerHeight, setheaderHeight] = useState(0)
    const headerRef = useRef({})

    // Workaround to recalculate headroom height on resize as non-parent window is unsupported
    // Use to trigger a rerender on resize, not necessarily need the height as that is calculated by headroom
    useEffect(() => {
        // Get non-parent window
        const elem = document.getElementById('headroom-scroll')

        // timeoutId for debounce mechanism
        let timeoutId = null

        const debouncedResizeHandler = (delay = 150) => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId)
            const onResize = () => {
                if (headerRef.current) {
                    setheaderHeight(headerRef.current.offsetHeight)
                }
                // Calculate scrollbar width
                setScrollbarWidth(elem.offsetWidth - elem.clientWidth)
            }
            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(onResize, delay)
        }

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
            sx={styles.header(scrollbarWidth)}
        >
            <div ref={headerRef} sx={styles.container}>
                <Button
                    id="toggle-menu"
                    type="outline"
                    color="secondary"
                    icon="hamburger"
                    size="lg"
                    ariaLabel={ariaLabels.hmenu}
                    onClick={toggleMenu}
                    borderless
                />
                <Link href="/" passHref>
                    <a aria-label="Eateri Home" title="Eateri Home" sx={styles.logoBox}>
                        <Logo aria-hidden="true" focusable="false" className="logo" color="secondary" />
                        <LogoText aria-hidden="true" focusable="false" className="logo-text" />
                    </a>
                </Link>
                <NavLinks sx={styles.navlinks}>{['/menu', '/about', '#contact', '#reservations']}</NavLinks>
                <div sx={styles.actions}>
                    <Button
                        type="ghost"
                        color="secondary"
                        size="lg"
                        icon="cart"
                        ariaLabel={ariaLabels.cart}
                        onClick={toggleMenu}
                    />
                    <Button
                        type="outline"
                        color="secondary"
                        size="sm"
                        icon="user"
                        ariaLabel={ariaLabels.user}
                        onClick={toggleMenu}
                    />
                </div>
            </div>
        </Headroom>
    )
}

export default Header
