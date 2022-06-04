import { createContext, useContext, useState, useCallback, useMemo, useRef } from 'react'

const StyledContext = createContext({
    styled: false,
    ringed: false,
    styleProp: {},
    ringProp: {},
    toggleStyled: () => ({}),
    toggleRinged: () => ({}),
})

export function useStyle() {
    const ctx = useContext(StyledContext)
    return ctx
}

export const StyleProvider = ({ styled: initialStyled = false, ringed: initialRinged = false, children }) => {
    const [styled, setStyled] = useState(initialStyled)
    const [ringed, setRinged] = useState(initialRinged)

    const toggleStyled = useCallback(() => setStyled(_styled => !_styled), [])
    const toggleRinged = useCallback(() => setRinged(_ringed => !_ringed), [])
    const values = useMemo(
        () => ({
            styled,
            toggleStyled,
            styleProp: (styled && { 'data-style': '' }) || {},
            ringed,
            toggleRinged,
            ringProp: (ringed && { 'data-ring': '' }) || {},
        }),
        [styled, toggleStyled, ringed, toggleRinged]
    )
    return <StyledContext.Provider value={values}>{children}</StyledContext.Provider>
}

const FormRefsContext = createContext({})

export function useFormRefs() {
    const ctx = useContext(FormRefsContext)
    return ctx
}

export const FormRefsProvider = ({ children }) => {
    const dateRef = useRef(null)
    const timeRef = useRef(null)
    const guestRef = useRef(null)

    const values = useMemo(
        () => ({
            dateRef,
            timeRef,
            guestRef,
        }),
        []
    )

    return <FormRefsContext.Provider value={values}>{children}</FormRefsContext.Provider>
}
