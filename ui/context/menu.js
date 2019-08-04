import React, { useState, useRef } from 'react'

export const MenuContext = React.createContext({
    isOpen: false,
    closeMenu: () => ({}),
    toggleMenu: () => ({}),
    onStateChange: () => ({}),
})

const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const firstMenuItemRef = useRef(null)

    const closeMenu = () => {
        // Check to prevent PageWrap from overriding toggleMenu from opening menu
        if (isOpen) {
            setIsOpen(false)
        }
    }

    return (
        <MenuContext.Provider
            value={{
                isOpen,
                closeMenu,
                firstMenuItemRef,
                toggleMenu: () => setIsOpen(!isOpen),
                onStateChange: state => setIsOpen(state.isOpen),
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider
