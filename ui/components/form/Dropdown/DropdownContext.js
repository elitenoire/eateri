import { createContext, useMemo } from 'react'

import { useMenuState } from 'reakit/Menu'

export const DropdownContext = createContext()

function Dropdown({ children, ...initialState }) {
    const menu = useMenuState(initialState)
    const value = useMemo(() => menu, Object.values(menu))
    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}

export default Dropdown
