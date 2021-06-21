/** @jsx jsx */
import { useContext, useCallback, useRef, useEffect } from 'react'
import { jsx } from '@theme-ui/core'
import { MenuContext } from '~/context/menu'
import { Header, Footer, MobileSideMenu, BackToTop } from '~@/navigation'
import styles from './style'

export default function DefaultLayout({ children, hasMap, mini }) {
    const { isOpen, closeMenu, toggleMenu, firstMenuItemRef, pageScrollRef } = useContext(MenuContext)
    const flipperRef = useRef()

    useEffect(() => {
        // eslint-disable-next-line prefer-destructuring
        flipperRef.current = document.getElementsByClassName('rft-flipper')[0]
    }, [])

    // helps react flip toolkit to work well
    // height 100% is used by react burger menu
    useEffect(() => {
        if (isOpen) {
            flipperRef.current.style = 'height: 100%'
        } else {
            flipperRef.current.style.removeProperty('height')
        }
    }, [isOpen])

    const preventTabbing = useCallback(
        e => {
            if (isOpen) {
                e.persist()
                if (e.keyCode === 9) {
                    e.preventDefault()
                    firstMenuItemRef.focus()
                }
            }
        },
        [firstMenuItemRef, isOpen]
    )

    return (
        <div id="outer-container" sx={styles.container}>
            <MobileSideMenu />
            <div
                id="page-wrap"
                role="presentation"
                sx={isOpen ? styles.pageWrapOpen : styles.pageWrap}
                onClick={closeMenu}
            >
                <div
                    ref={pageScrollRef}
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
                    <Footer hasMap={hasMap} mini={mini} />
                    <BackToTop />
                </div>
            </div>
        </div>
    )
}

export function getLayout(page, props) {
    return <DefaultLayout {...props}>{page}</DefaultLayout>
}
