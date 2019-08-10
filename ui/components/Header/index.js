import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Headroom from 'react-headroom'
import Button from '../Button'
import { Container, Nav, LogoBox, StyledHeader } from './style'
import Logo from '~static/logo.svg'
import LogoText from '~static/logo-tt.svg'

const ariaLabels = {
    cart: 'Items in cart',
    user: 'View user account',
    hmenu: 'Open side menu',
}

const NavLinks = ({ children }) => (
    <Nav>
        <ul>
            {children.map(link => (
                <li key={link.slice(2)}>
                    <Link href={link}>
                        <a>{link.charAt(1).toUpperCase() + link.slice(2)}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Nav>
)

const Header = ({ isOpen, toggleMenu }) => {
    const [withShadow, setWithShadow] = useState(false)
    const [scrollbarWidth, setScrollbarWidth] = useState(0)
    const [headerHeight, setheaderHeight] = useState(0)
    const headerRef = useRef({})

    const onPin = () => setWithShadow(true)
    const onUnpin = () => setWithShadow(false)

    // TODO: debounce to increase perf
    const resizeHandler = () => {
        if (headerRef.current) {
            setheaderHeight(headerRef.current.offsetHeight)
        }
    }

    // Calculate scrollbar width
    useEffect(() => {
        const elem = document.getElementById('headroom-scroll')
        setScrollbarWidth(elem.offsetWidth - elem.clientWidth)
    }, [])

    // Workaround to recalculate headroom height on resize as non-parent window is unsupported
    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [resizeHandler])

    return (
        <StyledHeader inlineHeight={headerHeight}>
            <Headroom
                onPin={onPin}
                onUnfix={onUnpin}
                onUnpin={onUnpin}
                disableInlineStyles={isOpen}
                wrapperStyle={{ overflow: 'hidden' }}
                parent={() => document.getElementById('headroom-scroll')}
                style={{
                    width: withShadow ? `calc(100% - ${scrollbarWidth}px)` : '100%',
                }}
                calcHeightOnResize={false}
            >
                <Container showHeaderShadow={withShadow} ref={headerRef}>
                    <LogoBox>
                        <Link href="/">
                            <a aria-label="Eateria Restaurant">
                                <Logo aria-hidden="true" focusable="false" />
                                <LogoText aria-hidden="true" focusable="false" />
                            </a>
                        </Link>
                    </LogoBox>
                    <Button size={1} icon="hamburger" ariaLabel={ariaLabels.hmenu} onClick={toggleMenu} curved />
                    <NavLinks>{['/about', '/menu', '#contact', '/reservations']}</NavLinks>
                    <div>
                        <Button size={1} icon="cart" ariaLabel={ariaLabels.cart} onClick={toggleMenu} circle />
                        <Button size={1} icon="user" ariaLabel={ariaLabels.user} onClick={toggleMenu} circle />
                    </div>
                </Container>
            </Headroom>
        </StyledHeader>
    )
}

export default Header
