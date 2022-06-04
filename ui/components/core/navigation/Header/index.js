import { useState, useCallback, useRef } from 'react'
import Headroom from 'react-headroom'
import { Button, Logo } from '~@core/general'
import useOnClickOutside from '~/hooks/useOnClickOutside'
import useSafeTimeout from '~/hooks/useSafeTimeout'
import NavLinks from './NavLinks'
import UserAccount from './UserAccount'

import styles from './style'

const ariaLabels = {
    bag: 'Items in bag',
    hmenu: 'Navigate',
    search: 'Explore food',
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
                <NavLinks
                    sx={styles.navlinks}
                    data-collapse={show ? '' : null}
                    data-animating={animating ? '' : null}
                />
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
