import { useContext, useCallback } from 'react'
import { MenuContext } from '~/context/menu'
import { Header, Footer, MobileSideMenu, BackToTop } from '~@core/navigation'
import styles from './style'

export default function DefaultLayout({ children, hasMap, mini }) {
    const { isOpen, closeMenu, toggleMenu, firstMenuItemRef } = useContext(MenuContext)

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
                    id="headroom-scroll"
                    className="page-content"
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
