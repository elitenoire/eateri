import { useState, useCallback, useRef } from 'react'
import Headroom from 'react-headroom'
import { Button, Logo } from '~@core/general'
import { Link } from '~@core/navigation'
import useScrollTo from '~/hooks/useScrollTo'
import useOnClickOutside from '~/hooks/useOnClickOutside'
import useSafeTimeout from '~/hooks/useSafeTimeout'
import { HASH_ID_CONTACT, HASH_ID_RESERVATIONS } from '~/constants'
import UserAccount from './UserAccount'

import styles from './style'

const ariaLabels = {
    bag: 'Items in bag',
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
                            <Link href={link}>{link.charAt(1).toUpperCase() + link.slice(2)}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

// TODO: Close open menus on resizing to viewports where they are not enabled.
// This will close issue #2 on github
function Header({ isOpen, toggleMenu }) {
    const headerRef = useRef()
    const timerRef = useRef()
    const [show, setShow] = useState(false)
    const [animating, setAnimating] = useState(false)
    const { safeSetTimeout, safeClearTimeout } = useSafeTimeout()

    const animate = useCallback(() => {
        setAnimating(true)
        safeClearTimeout(timerRef.current)
        timerRef.current = safeSetTimeout(() => {
            setAnimating(false)
        }, 250)
    }, [safeSetTimeout, safeClearTimeout])

    const toggle = useCallback(() => {
        setShow(_show => !_show)
        animate()
    }, [animate])

    const close = useCallback(() => {
        if (show) {
            setShow(false)
            animate()
        }
    }, [animate, show])

    useOnClickOutside(headerRef, close)

    return (
        <Headroom onUnpin={close} disableInlineStyles={isOpen} sx={styles.header}>
            <div ref={headerRef} sx={styles.container}>
                <div sx={styles.toggleWrap}>
                    <Button
                        brand="outline"
                        color="secondary"
                        icon="hamburger"
                        scaleIcon="sm"
                        size="lg"
                        ariaLabel={ariaLabels.hmenu}
                        onClick={toggleMenu}
                        borderless
                    />
                    <Button
                        brand="outline"
                        color="secondary"
                        icon={show ? 'close' : 'hamburger'}
                        scaleIcon="sm"
                        size="lg"
                        ariaLabel={ariaLabels.hmenu}
                        onClick={toggle}
                        borderless
                    />
                </div>
                <Logo href="/" link animated color="secondary" linkColor="secondary.hover" sx={styles.logoBox} />
                <NavLinks sx={styles.navlinks} data-collapse={show ? '' : null} data-animating={animating ? '' : null}>
                    {['/menu', '/about', `#${HASH_ID_CONTACT}`, `#${HASH_ID_RESERVATIONS}`]}
                </NavLinks>
                {/* Replace with reakit toolbar */}
                <div sx={styles.actions}>
                    <Button brand="ghost" color="secondary" size="lg" icon="search" ariaLabel={ariaLabels.search} />
                    <Button
                        brand="ghost"
                        bg="primary.light"
                        color="secondary"
                        ml="tiny"
                        size="lg"
                        icon="bag"
                        ariaLabel={ariaLabels.bag}
                    />
                    <UserAccount />
                </div>
            </div>
        </Headroom>
    )
}

export default Header
