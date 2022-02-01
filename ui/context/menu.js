import { createContext, useState, useRef, useCallback, useMemo } from 'react'

export const MenuContext = createContext({
    isOpen: false,
    closeMenu: () => ({}),
    toggleMenu: () => ({}),
})

const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const firstMenuItemRef = useRef(null)

    const closeMenu = useCallback(() => {
        // Check to prevent PageWrap from overriding toggleMenu from opening menu
        if (isOpen) {
            setIsOpen(false)
        }
    }, [isOpen])

    const toggleMenu = useCallback(() => setIsOpen(_isOpen => !_isOpen), [])

    const values = useMemo(
        () => ({
            isOpen,
            closeMenu,
            firstMenuItemRef,
            toggleMenu,
        }),
        [closeMenu, isOpen, toggleMenu]
    )

    return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
}

export default MenuProvider
